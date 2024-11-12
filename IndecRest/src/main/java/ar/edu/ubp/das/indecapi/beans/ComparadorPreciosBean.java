package ar.edu.ubp.das.indecapi.beans;

public class ComparadorPreciosBean extends PrecioBean {
    private int superId;
    private String productName;
    private String image;
    private String brandName;
    private String branchName;
    private String superName;
    private int isCheapest;
    private Double totalPrices;
    private int isTotalCheapest;
    private boolean productStatus;

    public int getSuperId() {
        return superId;
    }

    public void setSuperId(int superId) {
        this.superId = superId;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
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

    public boolean isCheapest() {
        return isCheapest == 1; // Casteo de int a boolean
    }

    public void setIsCheapest(int isCheapest) {
        this.isCheapest = isCheapest;
    }

    public boolean isTotalCheapest() {
        return isTotalCheapest == 1; // Casteo de int a boolean
    }

    public void setIsTotalCheapest(int isTotalCheapest) {
        this.isTotalCheapest = isTotalCheapest;
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

    public boolean isProductStatus() {
        return productStatus;
    }

    public void setProductStatus(boolean productStatus) {
        this.productStatus = productStatus;
    }
}
