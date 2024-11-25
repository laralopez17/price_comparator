package ar.edu.ubp.das.diaws.endpoints;
import ar.edu.ubp.das.diaws.beans.InformacionBean;
import ar.edu.ubp.das.diaws.beans.PrecioBean;
import ar.edu.ubp.das.diaws.services.DiaWS;
import ar.edu.ubp.das.diaws.services.jaxws.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import java.util.List;

@Endpoint
public class SupermercadoEndpoint {

    private static final String NAMESPACE_URI = "http://services.diaws.das.ubp.edu.ar/";

    @Autowired
    private DiaWS diaWS;

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "ObtenerPreciosRequest")
    @ResponsePayload
    public ObtenerPreciosResponse obtenerPrecios(@RequestPayload ObtenerPrecios request) {
        String criteria = request.getCriteria();
        List<PrecioBean> precios = diaWS.obtenerPrecios(criteria);

        ObtenerPreciosResponse response = new ObtenerPreciosResponse();
        response.setPreciosResponse(precios);
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "ObtenerInformacionRequest")
    @ResponsePayload
    public ObtenerInformacionResponse obtenerInformacion() {
        List<InformacionBean> informacion = diaWS.obtenerInformacion();

        ObtenerInformacionResponse response = new ObtenerInformacionResponse();
        response.setInformacionResponse(informacion);
        return response;
    }
}