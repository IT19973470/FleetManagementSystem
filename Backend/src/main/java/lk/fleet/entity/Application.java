package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalDateTime;

//Gayan//
@Entity
public class Application {
    @Id
    private String applicationID;
    private String destination;
    private String vehicleType;
    private boolean approval;
    private LocalDateTime depatureDate;
    private LocalDateTime arrivaleDate;
    private String reason;


    public String getApplicationID() {
        return this.applicationID;
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
