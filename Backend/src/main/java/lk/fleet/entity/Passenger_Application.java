package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Passenger_Application {
    @Id
    public String RequestID;
    public  String No_of_passengers;

    public String getRequestID() {
        return RequestID;
    }

    public void setRequestID(String requestID) {
        RequestID = requestID;
    }

    public String getNo_of_passengers() {
        return No_of_passengers;
    }

    public void setNo_of_passengers(String no_of_passengers) {
        No_of_passengers = no_of_passengers;
    }
}
