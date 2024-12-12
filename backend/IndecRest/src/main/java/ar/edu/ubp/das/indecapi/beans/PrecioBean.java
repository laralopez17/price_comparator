package ar.edu.ubp.das.indecapi.beans;

import jakarta.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "PreciosResponse")

public class PrecioBean {
    private int branchId;
    private String barcode;
    private Double price;

    public int getBranchId() {
        return branchId;
    }

    public void setBranchId(int branchId) {
        this.branchId = branchId;
    }

    public String getBarcode() {
        return barcode;
    }

    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
