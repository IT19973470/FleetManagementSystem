package lk.fleet.dto;

import lk.fleet.entity.BookingApplication;
import lk.fleet.entity.PassengerApplication;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class PassengerApplicationDTO {
    private String drivername;
    private String vehicleId;
<<<<<<< Updated upstream
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
=======
    private String applicationId;
    private  String contactNumber;

    public PassengerApplicationDTO(BookingApplication bookingApplication) {
         this.drivername=bookingApplication.getBooking().getShift().getDriverVehicle().getDriver().getUserAccount().getName();
         this.vehicleId=bookingApplication.getBooking().getShift().getDriverVehicle().getVehicle().getVehicleId();
         this.applicationId=bookingApplication.getApplication().getApplicationID();
         this.contactNumber=bookingApplication.getBooking().getShift().getDriverVehicle().getDriver().getUserAccount().getContactNo();
        }

    public String getApplicationId() {
        return applicationId;
>>>>>>> Stashed changes
    }

    public void setApplicationId(String applicationId) {
        this.applicationId = applicationId;
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

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
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
