package ar.edu.ubp.das.indecapi.beans;

public class ComparadorPrecioBean {
    private Integer superId;
    private Double price;
    private String superName;
    private Boolean cheapest;
    private Boolean cheapestWProducts;
    private Boolean priceChanged;
    private Double diferencePerc;
    private Boolean positive;

    public Boolean isCheapest() {
        return cheapest;
    }

    public void setCheapest(Boolean cheapest) {
        this.cheapest = cheapest;
    }

    public String getSuperName() {
        return superName;
    }

    public void setSuperName(String superName) {
        this.superName = superName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getSuperId() {
        return superId;
    }

    public void setSuperId(Integer superId) {
        this.superId = superId;
    }

    public Boolean getCheapestWProducts() {
        return cheapestWProducts;
    }

    public void setCheapestWProducts(Boolean cheapestWProducts) {
        this.cheapestWProducts = cheapestWProducts;
    }

    public Boolean getPriceChanged() {
        return priceChanged;
    }

    public void setPriceChanged(Boolean priceChanged) {
        this.priceChanged = priceChanged;
    }

    public Double getDiferencePerc() {
        return diferencePerc;
    }

    public void setDiferencePerc(Double diferencePerc) {
        this.diferencePerc = diferencePerc;
    }

    public Boolean getPositive() {
        return positive;
    }

    public void setPositive(Boolean positive) {
        this.positive = positive;
    }

}
