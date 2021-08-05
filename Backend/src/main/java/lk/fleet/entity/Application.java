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
    private String applicationID;
    private String destination;
    private String vehicleType;
    private boolean approval;
    private LocalDate depatureDate;
    private LocalDate arrivaleDate;
    private String reason;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Booking booking;

    public Booking getBooking() {
        return booking;
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

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
