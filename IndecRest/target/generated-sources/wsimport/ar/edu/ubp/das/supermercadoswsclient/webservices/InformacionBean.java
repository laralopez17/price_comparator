
package ar.edu.ubp.das.supermercadoswsclient.webservices;

import java.util.ArrayList;
import java.util.List;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para informacionBean complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="informacionBean"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="branches" type="{http://services.supermercadosws.das.ubp.edu.ar/}sucursalBean" maxOccurs="unbounded" minOccurs="0"/&gt;
 *         &lt;element name="products" type="{http://services.supermercadosws.das.ubp.edu.ar/}productoBean" maxOccurs="unbounded" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "informacionBean", propOrder = {
    "branches",
    "products"
})
public class InformacionBean {

    protected List<SucursalBean> branches;
    protected List<ProductoBean> products;

    /**
     * Gets the value of the branches property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the Jakarta XML Binding object.
     * This is why there is not a <CODE>set</CODE> method for the branches property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getBranches().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link SucursalBean }
     * 
     * 
     */
    public List<SucursalBean> getBranches() {
        if (branches == null) {
            branches = new ArrayList<SucursalBean>();
        }
        return this.branches;
    }

    /**
     * Gets the value of the products property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the Jakarta XML Binding object.
     * This is why there is not a <CODE>set</CODE> method for the products property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getProducts().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ProductoBean }
     * 
     * 
     */
    public List<ProductoBean> getProducts() {
        if (products == null) {
            products = new ArrayList<ProductoBean>();
        }
        return this.products;
    }

}
