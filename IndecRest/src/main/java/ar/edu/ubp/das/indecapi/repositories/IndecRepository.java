package ar.edu.ubp.das.indecapi.repositories;

import ar.edu.ubp.das.indecapi.beans.*;
import ar.edu.ubp.das.indecapi.components.SimpleJdbcCallFactory;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class IndecRepository {

    @Autowired
    private SimpleJdbcCallFactory jdbcCallFactory;

    private final Gson gson = new Gson();

    public List<Map<String, Object>> getCategoriasProductos(String codIdioma) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("cod_idioma", codIdioma);
        return jdbcCallFactory.executeQueryWithResulset("get_categorias_productos", "dbo", params, "resultados");

    }

    public List<MarcaBean> getMarcas(String codIdioma, RequestBean criteria) {
        String json = gson.toJson(criteria);
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("cod_idioma", codIdioma)
                .addValue("json", json);
        return jdbcCallFactory.executeQuery("get_marcas_productos", "dbo", params, "productos", MarcaBean.class);
    }

    public List<ProductoDescBean> getProductos(String codIdioma, RequestBean criteria) {
        String json = gson.toJson(criteria);
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("cod_idioma", codIdioma)
                .addValue("json", json);
        return jdbcCallFactory.executeQuery("get_productos", "dbo", params, "productos", ProductoDescBean.class);
    }

    public List<ProvinciaBean> getProvincias() {
        return jdbcCallFactory.executeQuery("get_provincias", "dbo", "provincias", ProvinciaBean.class);
    }

    public List<LocalidadBean> getLocalidades(String codProvince) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("cod_provincia", codProvince);
        return jdbcCallFactory.executeQuery("get_localidades", "dbo", params, "localidades", LocalidadBean.class);
    }

    public List<ComparadorPreciosBean> getPreciosComparados(ProductoCriteriaBean criteria) {
        String json = gson.toJson(criteria);
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("json", json);
        return jdbcCallFactory.executeQuery("get_precios_comparados", "dbo", params, "preciosComparados", ComparadorPreciosBean.class);
    }

    public List<InformacionSucursalBean> getInformacionSucursales(int nroLocalidad ) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("nro_localidad", nroLocalidad);
        return jdbcCallFactory.executeQuery("get_informacion_sucursales", "dbo", params, "informacionSucursales", InformacionSucursalBean.class);
    }

    public List<InformacionSucursalBean> getInfoSucursalesSuper(int nroSupermercado) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("nro_supermercado", nroSupermercado);
        return jdbcCallFactory.executeQuery("get_info_sucursales_super", "dbo", params, "informacionSucursales", InformacionSucursalBean.class);
    }
}

