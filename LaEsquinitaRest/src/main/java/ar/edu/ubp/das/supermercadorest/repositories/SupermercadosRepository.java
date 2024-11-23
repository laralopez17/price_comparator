package ar.edu.ubp.das.supermercadorest.repositories;

import ar.edu.ubp.das.supermercadorest.beans.InformacionBean;
import ar.edu.ubp.das.supermercadorest.beans.PrecioBean;
import ar.edu.ubp.das.supermercadorest.beans.ProductoBean;
import ar.edu.ubp.das.supermercadorest.components.SimpleJdbcCallFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.google.gson.Gson;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Repository
public class SupermercadosRepository {
    @Autowired
    private SimpleJdbcCallFactory jdbcCallFactory;
    private final Gson gson = new Gson();

    public List<PrecioBean> getPreciosSucursal(String criteria) {
        SqlParameterSource params = new MapSqlParameterSource().addValue("json", criteria);
        return jdbcCallFactory.executeQuery(
                "get_precios_sucursal",
                "dbo",
                params,
                "productosSucursales",
                PrecioBean.class
        );
    }

    public List<InformacionBean> getInformacionSucursales() {
        return jdbcCallFactory.executeQuery(
                "get_informacion_sucursales",
                "dbo",
                "infoSucursales",
                InformacionBean.class
        );
    }
}
