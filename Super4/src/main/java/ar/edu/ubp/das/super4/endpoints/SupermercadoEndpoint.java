package ar.edu.ubp.das.super4.endpoints;
import ar.edu.ubp.das.super4.beans.InformacionBean;
import ar.edu.ubp.das.super4.beans.PrecioBean;
import ar.edu.ubp.das.super4.services.Super4;
import ar.edu.ubp.das.super4.services.jaxws.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import java.util.List;

@Endpoint
public class SupermercadoEndpoint {

    private static final String NAMESPACE_URI = "http://services.discows.das.ubp.edu.ar/";

    @Autowired
    private Super4 super4;

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "ObtenerPreciosRequest")
    @ResponsePayload
    public ObtenerPreciosResponse obtenerPrecios(@RequestPayload ObtenerPrecios request) {
        String criteria = request.getCriteria();
        List<PrecioBean> precios = super4.obtenerPrecios(criteria);

        ObtenerPreciosResponse response = new ObtenerPreciosResponse();
        response.setPreciosResponse(precios);
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "ObtenerInformacionRequest")
    @ResponsePayload
    public ObtenerInformacionResponse obtenerInformacion() {
        List<InformacionBean> informacion = super4.obtenerInformacion();

        ObtenerInformacionResponse response = new ObtenerInformacionResponse();
        response.setInformacionResponse(informacion);
        return response;
    }
}