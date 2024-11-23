
package ar.edu.ubp.das.supermercadoswsclient.webservices;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para sucursalBean complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="sucursalBean"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="branchId" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="branchName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="branchSchedule" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="branchServices" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="latitude" type="{http://www.w3.org/2001/XMLSchema}float"/&gt;
 *         &lt;element name="localityId" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="longitude" type="{http://www.w3.org/2001/XMLSchema}float"/&gt;
 *         &lt;element name="phone" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="street" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="streetId" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "sucursalBean", propOrder = {
    "branchId",
    "branchName",
    "branchSchedule",
    "branchServices",
    "latitude",
    "localityId",
    "longitude",
    "phone",
    "street",
    "streetId"
})
public class SucursalBean {

    protected int branchId;
    protected String branchName;
    protected String branchSchedule;
    protected String branchServices;
    protected float latitude;
    protected int localityId;
    protected float longitude;
    protected String phone;
    protected String street;
    protected int streetId;

    /**
     * Obtiene el valor de la propiedad branchId.
     * 
     */
    public int getBranchId() {
        return branchId;
    }

    /**
     * Define el valor de la propiedad branchId.
     * 
     */
    public void setBranchId(int value) {
        this.branchId = value;
    }

    /**
     * Obtiene el valor de la propiedad branchName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBranchName() {
        return branchName;
    }

    /**
     * Define el valor de la propiedad branchName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBranchName(String value) {
        this.branchName = value;
    }

    /**
     * Obtiene el valor de la propiedad branchSchedule.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBranchSchedule() {
        return branchSchedule;
    }

    /**
     * Define el valor de la propiedad branchSchedule.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBranchSchedule(String value) {
        this.branchSchedule = value;
    }

    /**
     * Obtiene el valor de la propiedad branchServices.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBranchServices() {
        return branchServices;
    }

    /**
     * Define el valor de la propiedad branchServices.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBranchServices(String value) {
        this.branchServices = value;
    }

    /**
     * Obtiene el valor de la propiedad latitude.
     * 
     */
    public float getLatitude() {
        return latitude;
    }

    /**
     * Define el valor de la propiedad latitude.
     * 
     */
    public void setLatitude(float value) {
        this.latitude = value;
    }

    /**
     * Obtiene el valor de la propiedad localityId.
     * 
     */
    public int getLocalityId() {
        return localityId;
    }

    /**
     * Define el valor de la propiedad localityId.
     * 
     */
    public void setLocalityId(int value) {
        this.localityId = value;
    }

    /**
     * Obtiene el valor de la propiedad longitude.
     * 
     */
    public float getLongitude() {
        return longitude;
    }

    /**
     * Define el valor de la propiedad longitude.
     * 
     */
    public void setLongitude(float value) {
        this.longitude = value;
    }

    /**
     * Obtiene el valor de la propiedad phone.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPhone() {
        return phone;
    }

    /**
     * Define el valor de la propiedad phone.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPhone(String value) {
        this.phone = value;
    }

    /**
     * Obtiene el valor de la propiedad street.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStreet() {
        return street;
    }

    /**
     * Define el valor de la propiedad street.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStreet(String value) {
        this.street = value;
    }

    /**
     * Obtiene el valor de la propiedad streetId.
     * 
     */
    public int getStreetId() {
        return streetId;
    }

    /**
     * Define el valor de la propiedad streetId.
     * 
     */
    public void setStreetId(int value) {
        this.streetId = value;
    }

}
