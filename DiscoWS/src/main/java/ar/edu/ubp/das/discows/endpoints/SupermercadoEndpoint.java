package ar.edu.ubp.das.discows.endpoints;
import ar.edu.ubp.das.discows.beans.InformacionBean;
import ar.edu.ubp.das.discows.beans.PrecioBean;
import ar.edu.ubp.das.discows.services.DiscoWS;
import ar.edu.ubp.das.discows.services.jaxws.*;
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
    private DiscoWS discoWS;

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "ObtenerPreciosRequest")
    @ResponsePayload
    public ObtenerPreciosResponse obtenerPrecios(@RequestPayload ObtenerPrecios request) {
        String criteria = request.getCriteria();
        List<PrecioBean> precios = discoWS.obtenerPrecios(criteria);

        ObtenerPreciosResponse response = new ObtenerPreciosResponse();
        response.setPreciosResponse(precios);
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "ObtenerInformacionRequest")
    @ResponsePayload
    public ObtenerInformacionResponse obtenerInformacion() {
        List<InformacionBean> informacion = discoWS.obtenerInformacion();

        ObtenerInformacionResponse response = new ObtenerInformacionResponse();
        response.setInformacionResponse(informacion);
        return response;
    }
}