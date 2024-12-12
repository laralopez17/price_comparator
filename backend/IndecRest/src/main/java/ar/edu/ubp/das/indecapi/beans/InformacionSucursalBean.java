package ar.edu.ubp.das.indecapi.beans;

public class InformacionSucursalBean {
    private int superId;
    private int branchId;
    private String branchName;
    private String address;
    private String phone;
    private float latitude;
    private float longitude;
    private int localityId;
    private String branchSchedule;
    private String branchServices;

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

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getLocalityId() {
        return localityId;
    }

    public void setLocalityId(int localityId) {
        this.localityId = localityId;
    }

    public String getBranchSchedule() {
        return branchSchedule;
    }

    public void setBranchSchedule(String branchSchedule) {
        this.branchSchedule = branchSchedule;
    }

    public String getBranchServices() {
        return branchServices;
    }

    public void setBranchServices(String branchServices) {
        this.branchServices = branchServices;
    }

    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }
}
