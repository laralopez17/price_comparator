package ar.edu.ubp.das.indecapi.beans;

import java.util.List;

public class ProductoCriteriaBean {
    private int localityId;
    private List<String> barcodes;

    public List<String> getBarcodes() {
        return barcodes;
    }

    public void setBarcodes(List<String> barcodes) {
        this.barcodes = barcodes;
    }

    public int getLocalityId() {
        return localityId;
    }

    public void setLocalityId(int localityId) {
        this.localityId = localityId;
    }
}
