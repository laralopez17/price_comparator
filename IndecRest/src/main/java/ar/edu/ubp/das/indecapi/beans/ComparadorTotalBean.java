package ar.edu.ubp.das.indecapi.beans;

public class ComparadorTotalBean {
    private Integer superId;
    private Integer branchId;
    private Double totalPrices;
    private String superName;
    private Boolean cheapestWProducts;

    public Integer getSuperId() {
        return superId;
    }

    public void setSuperId(Integer superId) {
        this.superId = superId;
    }

    public Integer getBranchId() {
        return branchId;
    }

    public void setBranchId(Integer branchId) {
        this.branchId = branchId;
    }

    public Double getTotalPrices() {
        return totalPrices;
    }

    public void setTotalPrices(Double totalPrices) {
        this.totalPrices = totalPrices;
    }

    public String getSuperName() {
        return superName;
    }

    public void setSuperName(String superName) {
        this.superName = superName;
    }

    public Boolean isCheapestWProducts() {
        return cheapestWProducts;
    }

    public void setCheapestWProducts(Boolean cheapestWProducts) {
        this.cheapestWProducts = cheapestWProducts;
    }
}

