package lk.fleet.dto;

import lk.fleet.entity.PassengerApplication;

import java.time.LocalDate;

public class PassengerApplicationDTO {
    private String applicationID;
    private String destination;
    private String vehicleType;
    private boolean approval;
    private LocalDate depatureDate;
    private LocalDate arrivaleDate;
    private String reason;
    private int noOfPassengers;

    public PassengerApplicationDTO(PassengerApplication passengerApplication) {
        if(passengerApplication != null) {
         this.applicationID=passengerApplication.getApplication().getApplicationID();
         this.destination=passengerApplication.getApplication().getDestination();
         this.noOfPassengers=passengerApplication.getNoOfPassengers();
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

    public int getNoOfPassengers() {
        return noOfPassengers;
    }

    public void setNoOfPassengers(int noOfPassengers) {
        this.noOfPassengers = noOfPassengers;
    }
}
