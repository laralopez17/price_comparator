
package ar.edu.ubp.das.supermercadows.services.jaxws;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;

@XmlRootElement(name = "ObtenerPreciosRequest", namespace = "http://services.supermercadosws.das.ubp.edu.ar/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ObtenerPreciosRequest", namespace = "http://services.supermercadosws.das.ubp.edu.ar/")
public class ObtenerPrecios {

    @XmlElement(name = "criteria", namespace = "")
    private String criteria;

    /**
     * 
     * @return
     *     returns String
     */
    public String getCriteria() {
        return this.criteria;
    }

    /**
     * 
     * @param criteria
     *     the value for the criteria property
     */
    public void setCriteria(String criteria) {
        this.criteria = criteria;
    }

}
