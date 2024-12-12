package ar.edu.ubp.das.super4.beans;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

@XmlAccessorType(XmlAccessType.FIELD)
public class InformacionBean {

    @XmlElement(name = "branches")
    private List<SucursalBean> branches;

    @XmlElement(name = "products")
    private List<ProductoBean> products;

    public void setBranches(String branchesJson) {
        try {
            Gson gson = new Gson();
            Type listType = new TypeToken<List<SucursalBean>>() {}.getType();
            this.branches = gson.fromJson(branchesJson, listType);
        } catch (Exception e) {
            e.printStackTrace();
            this.branches = new ArrayList<>();
        }
    }
    public List<SucursalBean> getBranches() {
        return branches;
    }

    public void setProducts(String productsJson) {
        try {
            Gson gson = new Gson();
            Type listType = new TypeToken<List<ProductoBean>>() {}.getType();
            this.products = gson.fromJson(productsJson, listType);
        } catch (Exception e) {
            e.printStackTrace();
            this.products = new ArrayList<>();
        }
    }
    public List<ProductoBean> getProducts() {
        return products;
    }
}
