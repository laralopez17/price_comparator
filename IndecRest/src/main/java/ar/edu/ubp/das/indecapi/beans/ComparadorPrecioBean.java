package ar.edu.ubp.das.indecapi.beans;

public class ComparadorPrecioBean {
    private int superId;
    private int branchId;
    private Double price;
    private String branchName;
    private String superName;
    private boolean cheapest;
    private boolean isUpdated;

    public boolean isCheapest() {
        return cheapest;
    }

    public void setCheapest(boolean cheapest) {
        this.cheapest = cheapest;
    }

    public boolean isUpdated() {
        return isUpdated;
    }

    public void setUpdated(boolean updated) {
        isUpdated = updated;
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

    public int getBranchId() {
        return branchId;
    }

    public void setBranchId(int branchId) {
        this.branchId = branchId;
    }

    public int getSuperId() {
        return superId;
    }

    public void setSuperId(int superId) {
        this.superId = superId;
    }

}
