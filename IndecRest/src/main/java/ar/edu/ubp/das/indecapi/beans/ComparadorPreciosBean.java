package ar.edu.ubp.das.indecapi.beans;

public class ComparadorPreciosBean extends PrecioBean {
    private Integer superId;
    private String productName;
    private String image;
    private String brandName;
    private String branchName;
    private String superName;
    private Integer isCheapest;
    private Double totalPrices;
    private Integer isTotalCheapest;
    private Integer isCheapestWProducts;

    public Integer getSuperId() {
        return superId;
    }

    public void setSuperId(Integer superId) {
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

    public boolean isCheapest() {
        return isCheapest != null && isCheapest == 1; // Casteo de int a boolean
    }

    public void setIsCheapest(Integer isCheapest) {
        this.isCheapest = isCheapest;
    }

    public boolean isTotalCheapest() {
        return isTotalCheapest != null && isTotalCheapest == 1;
    }

    public void setIsTotalCheapest(Integer isTotalCheapest) {
        this.isTotalCheapest = isTotalCheapest;
    }

    public boolean isCheapestWProducts() { return isCheapestWProducts != null && isCheapestWProducts == 1;}

    public void setIsCheapestWProducts(Integer isCheapestWProducts) {
        this.isCheapestWProducts = isCheapestWProducts;
    }
}
