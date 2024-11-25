package ar.edu.ubp.das.indecapi.beans;

public class ComparadorPrecioBean {
    private Integer superId;
    private Integer branchId;
    private Double price;
    private String branchName;
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

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getBranchId() {
        return branchId;
    }

    public void setBranchId(Integer branchId) {
        this.branchId = branchId;
    }

    public Integer getSuperId() {
        return superId;
    }

    public void setSuperId(Integer superId) {
        this.superId = superId;
    }

}
