package ar.edu.ubp.das.indecapi.beans;

public class ComparadorPrecioBean {
    private Integer superId;
    private Double price;
    private String superName;
    private Boolean cheapest;

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

}
