package lk.fleet.entity;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class PassengerPassengerApplicationrPk implements Serializable {

    private String empID;
    private String requestID;

    public PassengerPassengerApplicationrPk(String empID, String requestID) {
        this.empID = empID;
        this.requestID = requestID;
    }

    public PassengerPassengerApplicationrPk() {

    }
}
