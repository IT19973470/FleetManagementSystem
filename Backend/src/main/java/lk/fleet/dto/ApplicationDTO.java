package lk.fleet.dto;

import lk.fleet.entity.Application;
import lk.fleet.entity.PassengerApplication;
import lk.fleet.entity.PassengerPassengerApplication;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public class ApplicationDTO {
    private String applicationID;
    private String destination;
    private String vehicleType;
    private boolean approval;
    private LocalDateTime depatureDate;
    private LocalDateTime arrivaleDate;
    private String reason;
    private String type;

    private PassengerAppDTO passengerApp;

    public ApplicationDTO(Application application) {
        if(application != null) {
            this.applicationID=application.getApplicationID();
            this.destination=application.getDestination();
            this.vehicleType=application.getVehicleType();
            this.approval=application.isApproval();
            this.depatureDate=application.getDepatureDate();
            this.arrivaleDate=application.getArrivaleDate();
            this.reason=application.getReason();
            this.type=application.getType();

        }
    }


    public PassengerAppDTO getPassengerApp() {
        return passengerApp;
    }

    public void setPassengerApp(PassengerAppDTO passengerApp) {
        this.passengerApp = passengerApp;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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

    public LocalDateTime getDepatureDate() {
        return depatureDate;
    }

    public void setDepatureDate(LocalDateTime depatureDate) {
        this.depatureDate = depatureDate;
    }

    public LocalDateTime getArrivaleDate() {
        return arrivaleDate;
    }

    public void setArrivaleDate(LocalDateTime arrivaleDate) {
        this.arrivaleDate = arrivaleDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

}
