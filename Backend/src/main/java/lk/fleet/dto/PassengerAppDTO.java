package lk.fleet.dto;

import lk.fleet.entity.PassengerApplication;
import lk.fleet.entity.PassengerPassengerApplication;

import java.util.List;
import java.util.Set;

public class PassengerAppDTO {

    private String passengerApplicationID;
    private int noOfPassengers;

    private List<PassengerDTO> passengers;

    public PassengerAppDTO(PassengerApplication passengerApplication) {
        if (passengerApplication != null) {
            this.passengerApplicationID = passengerApplication.getPassengerApplicationID();
            this.noOfPassengers = passengerApplication.getNoOfPassengers();
        }
    }

    public List<PassengerDTO> getPassengers() {
        return passengers;
    }

    public void setPassengers(List<PassengerDTO> passengers) {
        this.passengers = passengers;
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
