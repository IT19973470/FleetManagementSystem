package lk.fleet.dto;

import lk.fleet.entity.Driver;

public class DriverDTO {
    private String driverID;
    private String licenseID;
    private boolean approval;
    private UserAccountDTO userAccount;

    public DriverDTO(String driverID, String licenseID, boolean approval) {
        this.driverID = driverID;
        this.licenseID = licenseID;
        this.approval = approval;
    }

    public DriverDTO(Driver driver) {

    }

    public DriverDTO(Driver driver, UserAccountDTO userAccountDTO){
        this(driver);
        this.userAccount = userAccountDTO;
    }

    public String getDriverID() {
        return driverID;
    }

    public void setDriverID(String driverID) {
        this.driverID = driverID;
    }

    public String getLicenseID() {
        return licenseID;
    }

    public void setLicenseID(String lisenseID) {
        this.licenseID = lisenseID;
    }

    public boolean isApproval() {
        return approval;
    }

    public void setApproval(boolean approval) {
        this.approval = approval;
    }

    public UserAccountDTO getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccountDTO userAccount) {
        this.userAccount = userAccount;
    }
}
