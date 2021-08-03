package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Application {
    @Id
    public String requestID;
    public String destination;
    public String vehicleType;
    public String approval;
    public LocalDate depatureDate;
    public LocalDate arrivaleDate;

    public String getRequestID() {
        return requestID;
    }

    public void setRequestID(String requestID) {
        this.requestID = requestID;
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

    public String getApproval() {
        return approval;
    }

    public void setApproval(String approval) {
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
}
