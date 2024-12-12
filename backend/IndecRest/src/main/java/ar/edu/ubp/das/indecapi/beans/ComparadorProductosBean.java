package ar.edu.ubp.das.indecapi.beans;

import java.util.List;

public class ComparadorProductosBean {
    private String barcode;
    private String productName;
    private String image;
    private String brandName;
    private List<ComparadorPrecioBean> prices;

    public String getBarcode() {
        return barcode;
    }

    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }

    public List<ComparadorPrecioBean> getPrices() {
        return prices;
    }

    public void setPrices(List<ComparadorPrecioBean> prices) {
        this.prices = prices;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }
}
