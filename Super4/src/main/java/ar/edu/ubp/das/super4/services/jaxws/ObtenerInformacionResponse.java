
package ar.edu.ubp.das.super4.services.jaxws;

import java.util.List;
import ar.edu.ubp.das.super4.beans.InformacionBean;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;

@XmlRootElement(name = "ObtenerInformacionResponse", namespace = "http://services.Super4.das.ubp.edu.ar/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ObtenerInformacionResponse", namespace = "http://services.Super4.das.ubp.edu.ar/")
public class ObtenerInformacionResponse {

    @XmlElement(name = "InformacionResponse", namespace = "")
    private List<InformacionBean> informacionResponse;

    /**
     * 
     * @return
     *     returns List<InformacionBean>
     */
    public List<InformacionBean> getInformacionResponse() {
        return this.informacionResponse;
    }

    /**
     * 
     * @param informacionResponse
     *     the value for the informacionResponse property
     */
    public void setInformacionResponse(List<InformacionBean> informacionResponse) {
        this.informacionResponse = informacionResponse;
    }

}
