package ar.edu.ubp.das.discows.services;

import ar.edu.ubp.das.discows.beans.InformacionBean;
import ar.edu.ubp.das.discows.beans.PrecioBean;
import ar.edu.ubp.das.discows.repositories.SupermercadoRepository;
import jakarta.jws.WebMethod;
import jakarta.jws.WebParam;
import jakarta.jws.WebResult;
import jakarta.jws.WebService;
import jakarta.xml.ws.RequestWrapper;
import jakarta.xml.ws.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@WebService(serviceName = "DiscoWS", targetNamespace = "http://services.discows.das.ubp.edu.ar/")
public class DiscoWS {

    @Autowired
    private SupermercadoRepository supermercadosRepository;

    @WebMethod(operationName = "ObtenerPrecios")
    @RequestWrapper(localName = "ObtenerPreciosRequest")
    @ResponseWrapper(localName = "ObtenerPreciosResponse")
    @WebResult(name = "PreciosResponse")
    public List<PrecioBean> obtenerPrecios(@WebParam(name = "criteria") String criteria) {
        return supermercadosRepository.getPreciosSucursal(criteria);
    }

    @WebMethod(operationName = "ObtenerInformacion")
    @RequestWrapper(localName = "ObtenerInformacionRequest")
    @ResponseWrapper(localName = "ObtenerInformacionResponse")
    @WebResult(name = "InformacionResponse")
    public List<InformacionBean> obtenerInformacion() {
        return supermercadosRepository.getInformacionSucursales();
    }
}
