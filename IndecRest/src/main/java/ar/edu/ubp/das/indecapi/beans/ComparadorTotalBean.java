package ar.edu.ubp.das.indecapi.beans;

public class ComparadorTotalBean {
    private int superId;
    private int branchId;
    private Double totalPrices;
    private String branchName;
    private String superName;
    private boolean totalCheapest;

    public int getSuperId() {
        return superId;
    }

    public void setSuperId(int superId) {
        this.superId = superId;
    }

    public int getBranchId() {
        return branchId;
    }

    public void setBranchId(int branchId) {
        this.branchId = branchId;
    }

    public Double getTotalPrices() {
        return totalPrices;
    }

    public void setTotalPrices(Double totalPrices) {
        this.totalPrices = totalPrices;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getSuperName() {
        return superName;
    }

    public void setSuperName(String superName) {
        this.superName = superName;
    }

    public boolean isTotalCheapest() {
        return totalCheapest;
    }

    public void setTotalCheapest(boolean totalCheapest) {
        this.totalCheapest = totalCheapest;
    }
}
