package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

//Gayan//
@Entity
public class Application {
    @Id
    private String requestID;
    private String destination;
    private String vehicleType;
    private String approval;
    private LocalDate depatureDate;
    private LocalDate arrivaleDate;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Booking booking;

    public Booking getBooking() {
        return booking;
    }

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
