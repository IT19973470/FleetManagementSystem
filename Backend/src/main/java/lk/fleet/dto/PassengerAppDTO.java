package lk.fleet.dto;

import lk.fleet.entity.PassengerApplication;

public class PassengerAppDTO {

    private String passengerApplicationID;
    private  int noOfPassengers;

    public PassengerAppDTO(PassengerApplication passengerApplication) {
        if(passengerApplication != null) {
        this.passengerApplicationID=passengerApplication.getPassengerApplicationID();
        this.noOfPassengers=passengerApplication.getNoOfPassengers();

        }
    }

    public String getPassengerApplicationID() {
        return passengerApplicationID;
    }

    public void setPassengerApplicationID(String passengerApplicationID) {
        this.passengerApplicationID = passengerApplicationID;
    }

    public int getNoOfPassengers() {
        return noOfPassengers;
    }

    public void setNoOfPassengers(int noOfPassengers) {
        this.noOfPassengers = noOfPassengers;
    }
}
