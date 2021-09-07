package lk.fleet.dto;

import lk.fleet.entity.Passenger;

public class PassengerDTO {
    String PassengerId;
    String PassengerName;
    String ContactNumber;

    public PassengerDTO(Passenger passenger) {
       this.PassengerId = passenger.getPassengerId();
       this.PassengerName=passenger.getUserAccount().getName();
       this.ContactNumber=passenger.getUserAccount().getContactNo();
    }

    public String getContactNumber() {
        return ContactNumber;
    }

    public void setContactNumber(String contactNumber) {
        ContactNumber = contactNumber;
    }

    public String getPassengerId() {
        return PassengerId;
    }

    public void setPassengerId(String passengerId) {
        PassengerId = passengerId;
    }

    public String getPassengerName() {
        return PassengerName;
    }

    public void setPassengerName(String passengerName) {
        PassengerName = passengerName;
    }
}
