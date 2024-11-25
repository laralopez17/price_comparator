
package ar.edu.ubp.das.discows.services.jaxws;

import java.util.List;
import ar.edu.ubp.das.discows.beans.PrecioBean;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;

@XmlRootElement(name = "ObtenerPreciosResponse", namespace = "http://services.discows.das.ubp.edu.ar/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ObtenerPreciosResponse", namespace = "http://services.discows.das.ubp.edu.ar/")
public class ObtenerPreciosResponse {

    @XmlElement(name = "PreciosResponse", namespace = "")
    private List<PrecioBean> preciosResponse;

    /**
     * 
     * @return
     *     returns List<PrecioBean>
     */
    public List<PrecioBean> getPreciosResponse() {
        return this.preciosResponse;
    }

    /**
     * 
     * @param preciosResponse
     *     the value for the preciosResponse property
     */
    public void setPreciosResponse(List<PrecioBean> preciosResponse) {
        this.preciosResponse = preciosResponse;
    }

}
