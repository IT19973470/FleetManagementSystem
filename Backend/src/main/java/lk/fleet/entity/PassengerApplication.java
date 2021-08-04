package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PassengerApplication {
    @Id
    public String requestID;
    public  String moOfPassengers;

    public String getRequestID() {
        return requestID;
    }

    public void setRequestID(String requestID) {
        this.requestID = requestID;
    }

    public String getMoOfPassengers() {
        return moOfPassengers;
    }

    public void setMoOfPassengers(String moOfPassengers) {
        this.moOfPassengers = moOfPassengers;
    }
}
