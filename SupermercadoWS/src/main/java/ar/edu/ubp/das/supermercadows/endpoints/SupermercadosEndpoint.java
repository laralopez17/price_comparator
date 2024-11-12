package ar.edu.ubp.das.supermercadows.endpoints;
import ar.edu.ubp.das.supermercadows.beans.InformacionBean;
import ar.edu.ubp.das.supermercadows.beans.PrecioBean;
import ar.edu.ubp.das.supermercadows.services.SupermercadosWS;
import ar.edu.ubp.das.supermercadows.services.jaxws.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import java.util.List;

@Endpoint
public class SupermercadosEndpoint {

    private static final String NAMESPACE_URI = "http://services.supermercadosws.das.ubp.edu.ar/";

    @Autowired
    private SupermercadosWS supermercadosWS;

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "ObtenerPreciosRequest")
    @ResponsePayload
    public ObtenerPreciosResponse obtenerPrecios(@RequestPayload ObtenerPrecios request) {
        String criteria = request.getCriteria();
        List<PrecioBean> precios = supermercadosWS.obtenerPrecios(criteria);

        ObtenerPreciosResponse response = new ObtenerPreciosResponse();
        response.setPreciosResponse(precios);
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "ObtenerInformacionRequest")
    @ResponsePayload
    public ObtenerInformacionResponse obtenerInformacion() {
        List<InformacionBean> informacion = supermercadosWS.obtenerInformacion();

        ObtenerInformacionResponse response = new ObtenerInformacionResponse();
        response.setInformacionResponse(informacion);
        return response;
    }
}