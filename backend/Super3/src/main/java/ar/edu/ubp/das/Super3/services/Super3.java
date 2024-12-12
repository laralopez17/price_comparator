package ar.edu.ubp.das.Super3.services;

import ar.edu.ubp.das.Super3.beans.InformacionBean;
import ar.edu.ubp.das.Super3.beans.PrecioBean;
import ar.edu.ubp.das.Super3.repositories.SupermercadoRepository;
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
@WebService(serviceName = "Super3", targetNamespace = "http://services.Super3.das.ubp.edu.ar/")
public class Super3 {

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
