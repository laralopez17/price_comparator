package ar.edu.ubp.das.indecapi.repositories;

import ar.edu.ubp.das.indecapi.beans.*;
import ar.edu.ubp.das.indecapi.components.SimpleJdbcCallFactory;
import ar.edu.ubp.das.indecapi.factory.SupermercadoApi;
import ar.edu.ubp.das.indecapi.factory.SupermercadoApiRest;
import ar.edu.ubp.das.indecapi.factory.SupermercadoApiSOAP;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class BatchRepository {

    private static final Logger logger = LoggerFactory.getLogger(BatchRepository.class);


    @Autowired
    private SimpleJdbcCallFactory jdbcCallFactory;
    private final Gson gson = new Gson();

    public List<ServicioSupermercadoBean> obtenerServiciosSupermercados() {
        return jdbcCallFactory.executeQuery("get_servicios_supermercados", "dbo", "productos", ServicioSupermercadoBean.class);
    }

    private List<SupermercadoApi> obtenerServiciosSupermercadoApis(String operacion) {
        List<SupermercadoApi> apis = new ArrayList<>();
        List<ServicioSupermercadoBean> servicios = obtenerServiciosSupermercados();

        for (ServicioSupermercadoBean servicio : servicios) {
            switch (servicio.getServiceType()) {
                case "REST" -> apis.add(new SupermercadoApiRest(
                        servicio.getServiceUrl(),
                        servicio.getServiceToken(),
                        servicio.getSuperId()
                ));
                case "SOAP" -> apis.add(new SupermercadoApiSOAP(
                        servicio.getServiceUrl(),
                        servicio.getServiceToken(),
                        servicio.getSuperId(),
                        operacion,
                        servicio.getNamespace(),
                        servicio.getServiceName(),
                        servicio.getPortName()
                ));
                default -> throw new IllegalArgumentException("Tipo de servicio no soportado: " + servicio.getServiceType());
            }
        }
        return apis;
    }

    public void obtenerPreciosProductosBatch() {
        List<SupermercadoApi> apis = obtenerServiciosSupermercadoApis("ObtenerPreciosRequest");
        List<PrecioCriteriaBean> criteria = getTodosProductos();

        for (SupermercadoApi supermercadoApi : apis) {
            try {
                List<PrecioBean> precios = supermercadoApi.getPreciosProductos(criteria);
                String jsonResponse = gson.toJson(precios);
                actualizarPrecios(jsonResponse, supermercadoApi.getSuperId());
                logger.info("Actualización de precios exitosa para supermercado con ID: {}", supermercadoApi.getSuperId());
            } catch (Exception e) {
                logger.error("Error al obtener o actualizar precios para supermercado con ID: {}: {}",
                        supermercadoApi.getSuperId(), e.getMessage());
            }
        }
    }

    public void obtenerInformacionBatch() {
        List<SupermercadoApi> apis = obtenerServiciosSupermercadoApis("ObtenerInformacionRequest");

        for (SupermercadoApi supermercadoApi : apis) {
            try {
                List<InformacionBean> info = supermercadoApi.getInformacionSupermercado();
                String jsonResponse = gson.toJson(info);
                actualizarInformacion(jsonResponse, supermercadoApi.getSuperId());
                logger.info("Actualización de información exitosa para supermercado con ID: {}", supermercadoApi.getSuperId());
            } catch (Exception e) {
                logger.error("Error al obtener o actualizar información para supermercado con ID: {}: {}",
                        supermercadoApi.getSuperId(), e.getMessage());
            }
        }
    }

    public void actualizarPrecios(String jsonResponse,int nroSupermercado) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("json", jsonResponse)
                .addValue("nro_supermercado", nroSupermercado);
        jdbcCallFactory.execute("act_precios_productos", "dbo", params);
    }

    public void actualizarInformacion(String jsonResponse,int nroSupermercado) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("json", jsonResponse)
                .addValue("nro_supermercado", nroSupermercado);
        jdbcCallFactory.execute("act_informacion_sucursales", "dbo", params);
    }

    public List<PrecioCriteriaBean> getTodosProductos() {
        return jdbcCallFactory.executeQuery("get_todos_productos", "dbo", "productos", PrecioCriteriaBean.class);
    }
}
