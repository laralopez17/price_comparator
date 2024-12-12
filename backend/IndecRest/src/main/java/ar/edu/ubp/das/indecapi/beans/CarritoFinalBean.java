package ar.edu.ubp.das.indecapi.beans;

import java.util.List;

public class CarritoFinalBean {
    private List<ComparadorProductosBean> products;
    private List<ComparadorTotalBean> totals;

    public List<ComparadorProductosBean> getProducts() {
        return products;
    }

    public void setProducts(List<ComparadorProductosBean> products) {
        this.products = products;
    }

    public List<ComparadorTotalBean> getTotals() {
        return totals;
    }

    public void setTotals(List<ComparadorTotalBean> totals) {
        this.totals = totals;
    }
}
