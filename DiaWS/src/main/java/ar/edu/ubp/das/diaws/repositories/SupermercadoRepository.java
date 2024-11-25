package ar.edu.ubp.das.diaws.repositories;

import ar.edu.ubp.das.diaws.beans.InformacionBean;
import ar.edu.ubp.das.diaws.beans.PrecioBean;
import ar.edu.ubp.das.diaws.components.SimpleJdbcCallFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SupermercadoRepository {

    @Autowired
    private SimpleJdbcCallFactory jdbcCallFactory;

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
                InformacionBean.class);
    }
}
