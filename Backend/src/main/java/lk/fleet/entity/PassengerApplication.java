package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class PassengerApplication {
    @Id
    private String requestID;
    private  String moOfPassengers;

    @OneToOne
    private  Application application;

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }

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
