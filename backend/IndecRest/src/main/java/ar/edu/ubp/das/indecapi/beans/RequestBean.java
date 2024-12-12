package ar.edu.ubp.das.indecapi.beans;

public class RequestBean {
    private Integer categoryId;
    private Integer productTypeId;
    private Integer brandId;
    private Integer headingId;

    public Integer getHeadingId() {
        return headingId;
    }

    public void setHeadingId(Integer headingId) {
        this.headingId = headingId;
    }

    public Integer getBrandId() {
        return brandId;
    }

    public void setBrandId(Integer brandId) {
        this.brandId = brandId;
    }

    public Integer getProductTypeId() {
        return productTypeId;
    }

    public void setProductTypeId(Integer productTypeId) {
        this.productTypeId = productTypeId;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }
}
