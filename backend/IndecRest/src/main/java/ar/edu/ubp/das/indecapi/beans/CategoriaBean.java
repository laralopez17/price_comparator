package ar.edu.ubp.das.indecapi.beans;

import java.util.List;

public class CategoriaBean {
    private int categoryId;
    private String categoryName;
    private List<TipoProductoBean> productTypes;

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public List<TipoProductoBean> getProductTypes() {
        return productTypes;
    }

    public void setProductTypes(List<TipoProductoBean> productTypes) {
        this.productTypes = productTypes;
    }
}
