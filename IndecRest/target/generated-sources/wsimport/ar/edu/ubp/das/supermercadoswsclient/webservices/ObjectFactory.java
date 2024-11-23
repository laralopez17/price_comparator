
package ar.edu.ubp.das.supermercadoswsclient.webservices;

import javax.xml.namespace.QName;
import jakarta.xml.bind.JAXBElement;
import jakarta.xml.bind.annotation.XmlElementDecl;
import jakarta.xml.bind.annotation.XmlRegistry;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the ar.edu.ubp.das.supermercadoswsclient.webservices package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _ObtenerInformacionRequest_QNAME = new QName("http://services.supermercadosws.das.ubp.edu.ar/", "ObtenerInformacionRequest");
    private final static QName _ObtenerInformacionResponse_QNAME = new QName("http://services.supermercadosws.das.ubp.edu.ar/", "ObtenerInformacionResponse");
    private final static QName _ObtenerPreciosRequest_QNAME = new QName("http://services.supermercadosws.das.ubp.edu.ar/", "ObtenerPreciosRequest");
    private final static QName _ObtenerPreciosResponse_QNAME = new QName("http://services.supermercadosws.das.ubp.edu.ar/", "ObtenerPreciosResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: ar.edu.ubp.das.supermercadoswsclient.webservices
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ObtenerInformacionRequest }
     * 
     */
    public ObtenerInformacionRequest createObtenerInformacionRequest() {
        return new ObtenerInformacionRequest();
    }

    /**
     * Create an instance of {@link ObtenerInformacionResponse }
     * 
     */
    public ObtenerInformacionResponse createObtenerInformacionResponse() {
        return new ObtenerInformacionResponse();
    }

    /**
     * Create an instance of {@link ObtenerPreciosRequest }
     * 
     */
    public ObtenerPreciosRequest createObtenerPreciosRequest() {
        return new ObtenerPreciosRequest();
    }

    /**
     * Create an instance of {@link ObtenerPreciosResponse }
     * 
     */
    public ObtenerPreciosResponse createObtenerPreciosResponse() {
        return new ObtenerPreciosResponse();
    }

    /**
     * Create an instance of {@link InformacionBean }
     * 
     */
    public InformacionBean createInformacionBean() {
        return new InformacionBean();
    }

    /**
     * Create an instance of {@link SucursalBean }
     * 
     */
    public SucursalBean createSucursalBean() {
        return new SucursalBean();
    }

    /**
     * Create an instance of {@link ProductoBean }
     * 
     */
    public ProductoBean createProductoBean() {
        return new ProductoBean();
    }

    /**
     * Create an instance of {@link PrecioBean }
     * 
     */
    public PrecioBean createPrecioBean() {
        return new PrecioBean();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ObtenerInformacionRequest }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link ObtenerInformacionRequest }{@code >}
     */
    @XmlElementDecl(namespace = "http://services.supermercadosws.das.ubp.edu.ar/", name = "ObtenerInformacionRequest")
    public JAXBElement<ObtenerInformacionRequest> createObtenerInformacionRequest(ObtenerInformacionRequest value) {
        return new JAXBElement<ObtenerInformacionRequest>(_ObtenerInformacionRequest_QNAME, ObtenerInformacionRequest.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ObtenerInformacionResponse }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link ObtenerInformacionResponse }{@code >}
     */
    @XmlElementDecl(namespace = "http://services.supermercadosws.das.ubp.edu.ar/", name = "ObtenerInformacionResponse")
    public JAXBElement<ObtenerInformacionResponse> createObtenerInformacionResponse(ObtenerInformacionResponse value) {
        return new JAXBElement<ObtenerInformacionResponse>(_ObtenerInformacionResponse_QNAME, ObtenerInformacionResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ObtenerPreciosRequest }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link ObtenerPreciosRequest }{@code >}
     */
    @XmlElementDecl(namespace = "http://services.supermercadosws.das.ubp.edu.ar/", name = "ObtenerPreciosRequest")
    public JAXBElement<ObtenerPreciosRequest> createObtenerPreciosRequest(ObtenerPreciosRequest value) {
        return new JAXBElement<ObtenerPreciosRequest>(_ObtenerPreciosRequest_QNAME, ObtenerPreciosRequest.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ObtenerPreciosResponse }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link ObtenerPreciosResponse }{@code >}
     */
    @XmlElementDecl(namespace = "http://services.supermercadosws.das.ubp.edu.ar/", name = "ObtenerPreciosResponse")
    public JAXBElement<ObtenerPreciosResponse> createObtenerPreciosResponse(ObtenerPreciosResponse value) {
        return new JAXBElement<ObtenerPreciosResponse>(_ObtenerPreciosResponse_QNAME, ObtenerPreciosResponse.class, null, value);
    }

}
