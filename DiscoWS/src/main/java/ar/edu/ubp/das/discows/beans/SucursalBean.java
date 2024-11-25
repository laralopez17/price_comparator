package ar.edu.ubp.das.discows.beans;

public class SucursalBean {
    private int branchId;
    private String branchName;
    private String street;
    private int streetId;
    private String phone;
    private float latitude;
    private float longitude;
    private int localityId;
    private String branchSchedule;
    private String branchServices;

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

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getStreetId() {
        return streetId;
    }

    public void setStreetId(int streetId) {
        this.streetId = streetId;
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
