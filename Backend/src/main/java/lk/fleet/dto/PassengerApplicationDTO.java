package lk.fleet.dto;

import lk.fleet.entity.BookingApplication;
import lk.fleet.entity.PassengerApplication;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class PassengerApplicationDTO {
    private String applicationID;
    private String destination;
    private String vehicleType;
    private boolean approval;
    private LocalDateTime depatureDate;
    private String drivername;
    private String vehicleId;
    private int noOfPassengers;


    public PassengerApplicationDTO(BookingApplication bookingApplication) {
        if (bookingApplication != null) {
            this.applicationID = bookingApplication.getApplication().getApplicationID();
            this.vehicleType = bookingApplication.getApplication().getVehicleType();
            this.destination = bookingApplication.getApplication().getDestination();
            this.depatureDate = bookingApplication.getApplication().getDepatureDate();
            this.approval = bookingApplication.getApplication().isApproval();
            this.drivername = bookingApplication.getBooking().getShift().getDriverVehicle().getDriver().getUserAccount().getName();
            this.vehicleId = bookingApplication.getBooking().getShift().getDriverVehicle().getVehicle().getVehicleId();
            this.noOfPassengers = bookingApplication.getApplication().getPassengerApplication().getNoOfPassengers();
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

    public LocalDateTime getDepatureDate() {
        return depatureDate;
    }

    public void setDepatureDate(LocalDateTime depatureDate) {
        this.depatureDate = depatureDate;
    }

    public String getDrivername() {
        return drivername;
    }

    public void setDrivername(String drivername) {
        this.drivername = drivername;
    }

    public String getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
    }

    public int getNoOfPassengers() {
        return noOfPassengers;
    }

    public void setNoOfPassengers(int noOfPassengers) {
        this.noOfPassengers = noOfPassengers;
    }
}
