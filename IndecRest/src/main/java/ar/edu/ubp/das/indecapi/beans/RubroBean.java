package ar.edu.ubp.das.indecapi.beans;

import java.util.List;

public class RubroBean {
    private int headingId;
    private String headingName;
    private List<CategoriaBean> categories;

    public List<CategoriaBean> getCategories() {
        return categories;
    }

    public void setCategories(List<CategoriaBean> categories) {
        this.categories = categories;
    }

    public int getHeadingId() {
        return headingId;
    }

    public void setHeadingId(int headingId) {
        this.headingId = headingId;
    }

    public String getHeadingName() {
        return headingName;
    }

    public void setHeadingName(String headingName) {
        this.headingName = headingName;
    }
}
