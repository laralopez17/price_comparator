package ar.edu.ubp.das.indecapi.factory;

import ar.edu.ubp.das.indecapi.beans.InformacionBean;
import ar.edu.ubp.das.indecapi.beans.PrecioBean;
import ar.edu.ubp.das.indecapi.beans.PrecioCriteriaBean;
import ar.edu.ubp.das.indecapi.utils.SOAPClient;
import com.google.gson.Gson;

import java.util.List;
import java.util.Map;

public class SupermercadoApiSOAP implements SupermercadoApi {
    private final SOAPClient client;
    private final int superId;

    public SupermercadoApiSOAP(String wsdlUrl, String apiKey, int superId, String operation, String namespace, String serviceName, String portName) {
        this.superId = superId;
        this.client = new SOAPClient.SOAPClientBuilder()
                .wsdlUrl(wsdlUrl)
                .namespace(namespace)
                .serviceName(serviceName)
                .portName(portName)
                .operationName(operation)
                .apiKey(apiKey)
                .build();
    }

    @Override
    public int getSuperId() {
        return superId;
    }

    @Override
    public List<PrecioBean> getPreciosProductos(List<PrecioCriteriaBean> criteria) {
        Map<String, Object> params = Map.of("criteria", new Gson().toJson(criteria));
        return client.callServiceForList(PrecioBean.class, "ObtenerPreciosResponse", params);
    }

    @Override
    public List<InformacionBean> getInformacionSupermercado() {
        return client.callServiceForList(InformacionBean.class, "ObtenerInformacionResponse");
    }
}

