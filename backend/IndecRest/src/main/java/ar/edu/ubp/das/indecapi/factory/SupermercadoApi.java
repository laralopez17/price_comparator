package ar.edu.ubp.das.indecapi.factory;

import ar.edu.ubp.das.indecapi.beans.InformacionBean;
import ar.edu.ubp.das.indecapi.beans.PrecioBean;
import ar.edu.ubp.das.indecapi.beans.PrecioCriteriaBean;

import java.util.List;

public interface SupermercadoApi {
    List<PrecioBean> getPreciosProductos(List<PrecioCriteriaBean> criteria);
    List<InformacionBean> getInformacionSupermercado();
    int getSuperId();
}

