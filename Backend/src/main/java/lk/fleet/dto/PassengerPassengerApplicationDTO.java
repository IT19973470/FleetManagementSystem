package lk.fleet.dto;

import lk.fleet.entity.PassengerPassengerApplication;

public class PassengerPassengerApplicationDTO {


    private String passengerId;
    public String passengerName;
    public String contactNumber;


    public PassengerPassengerApplicationDTO(PassengerPassengerApplication passengerPassengerApplication) {
        ;
        this.passengerId=passengerPassengerApplication.getPassenger().getPassengerId();
        this.passengerName=passengerPassengerApplication.getPassenger().getUserAccount().getName();
        this.contactNumber=passengerPassengerApplication.getPassenger().getUserAccount().getContactNo();
    }

    public String getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(String passengerId) {
        this.passengerId = passengerId;
    }

    public String getPassengerName() {
        return passengerName;
    }

    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
}
