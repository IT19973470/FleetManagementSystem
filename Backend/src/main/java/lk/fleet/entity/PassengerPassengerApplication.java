package lk.fleet.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class PassengerPassengerApplication {

    @EmbeddedId
    private PassengerPassengerApplicationrPk passengerPassengerApplicationrPk;
    @ManyToOne
    @JoinColumn(name="empID",referencedColumnName = "empID",insertable = false, updatable = false,nullable = false)
    private  Passenger passenger;

    @ManyToOne
    @JoinColumn(name="requestID",referencedColumnName = "requestID",insertable = false, updatable = false,nullable = false)
    private Application application;

    public PassengerPassengerApplicationrPk getPassengerPassengerApplicationrPk() {
        return passengerPassengerApplicationrPk;
    }

    public void setPassengerPassengerApplicationrPk(PassengerPassengerApplicationrPk passengerPassengerApplicationrPk) {
        this.passengerPassengerApplicationrPk = passengerPassengerApplicationrPk;
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }
}
