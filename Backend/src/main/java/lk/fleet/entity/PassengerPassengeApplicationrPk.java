package lk.fleet.entity;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class PassengerPassengeApplicationrPk implements Serializable {

    private String empID;
    private String requestID;

    public PassengerPassengeApplicationrPk(String empID, String requestID) {
        this.empID = empID;
        this.requestID = requestID;
    }

    public PassengerPassengeApplicationrPk() {

    }
}
