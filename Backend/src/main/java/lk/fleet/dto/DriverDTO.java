package lk.fleet.dto;

import lk.fleet.entity.Driver;

public class DriverDTO {
    private String driverID;
    private String lisenseID;
    private boolean approval;

    public DriverDTO(String driverID, String lisenseID, boolean approval) {
        this.driverID = driverID;
        this.lisenseID = lisenseID;
        this.approval = approval;
    }

    public DriverDTO(Driver driver) {

    }

    public String getDriverID() {
        return driverID;
    }

    public void setDriverID(String driverID) {
        this.driverID = driverID;
    }

    public String getLisenseID() {
        return lisenseID;
    }

    public void setLisenseID(String lisenseID) {
        this.lisenseID = lisenseID;
    }

    public boolean isApproval() {
        return approval;
    }

    public void setApproval(boolean approval) {
        this.approval = approval;
    }
}
