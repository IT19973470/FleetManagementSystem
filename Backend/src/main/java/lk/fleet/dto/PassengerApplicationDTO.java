package lk.fleet.dto;

import lk.fleet.entity.BookingApplication;
import lk.fleet.entity.PassengerApplication;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class PassengerApplicationDTO {
    private String applicationID;
    private String drivername;
    private String vehicleId;
    private  String contactNumber;



    public PassengerApplicationDTO(BookingApplication bookingApplication) {
        if (bookingApplication != null) {
            this.applicationID = bookingApplication.getApplication().getApplicationID();
            this.drivername = bookingApplication.getBooking().getShift().getDriverVehicle().getDriver().getUserAccount().getName();
            this.vehicleId = bookingApplication.getBooking().getShift().getDriverVehicle().getVehicle().getVehicleId();
            this.contactNumber=bookingApplication.getBooking().getShift().getDriverVehicle().getDriver().getUserAccount().getContactNo();
        }

    }

    public String getApplicationID() {
        return applicationID;
    }

    public void setApplicationID(String applicationID) {
        this.applicationID = applicationID;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
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

}