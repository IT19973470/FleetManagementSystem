package lk.fleet.dto;

import lk.fleet.entity.PassengerPassengerApplication;

public class PassengerPassengerApplicationDTO {

    private String passengerApplicationID;
    private String passengerId;


    public PassengerPassengerApplicationDTO(PassengerApplicationDTO passengerApplicationDTO){
        this.passengerApplicationID = passengerApplicationDTO.getApplicationID();
        this.passengerId = passengerApplicationDTO.getApplicationID();
    }

    public String getPassengerApplicationID() {
        return passengerApplicationID;
    }

    public void setPassengerApplicationID(String passengerApplicationID) {
        this.passengerApplicationID = passengerApplicationID;
    }

    public String getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(String passengerId) {
        this.passengerId = passengerId;
    }
}
