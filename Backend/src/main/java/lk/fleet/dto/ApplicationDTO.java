package lk.fleet.dto;

import lk.fleet.entity.Application;

import java.time.LocalDate;

public class ApplicationDTO {
    private String applicationID;
    private String destination;
    private String vehicleType;
    private boolean approval;
    private LocalDate depatureDate;
    private LocalDate arrivaleDate;
    private String reason;

    public ApplicationDTO(Application application) {
        if(application != null) {
            this.applicationID=application.getApplicationID();
            this.destination=application.getDestination();
            this.vehicleType=application.getVehicleType();
            this.approval=application.isApproval();
            this.depatureDate=application.getDepatureDate();
            this.arrivaleDate=application.getArrivaleDate();
            this.reason=application.getReason();
        }
    }



    public String getApplicationID() {
        return applicationID;
    }

    public void setApplicationID(String applicationID) {
        this.applicationID = applicationID;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public boolean isApproval() {
        return approval;
    }

    public void setApproval(boolean approval) {
        this.approval = approval;
    }

    public LocalDate getDepatureDate() {
        return depatureDate;
    }

    public void setDepatureDate(LocalDate depatureDate) {
        this.depatureDate = depatureDate;
    }

    public LocalDate getArrivaleDate() {
        return arrivaleDate;
    }

    public void setArrivaleDate(LocalDate arrivaleDate) {
        this.arrivaleDate = arrivaleDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
