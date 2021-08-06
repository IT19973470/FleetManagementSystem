package lk.fleet.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class PassengerPassengerApplication {

    @EmbeddedId
    private PassengerPassengerApplicationPK passengerPassengerApplicationId;
    @ManyToOne
    @JoinColumn(name="passengerId",referencedColumnName = "passengerId",insertable = false, updatable = false,nullable = false)
    private  Passenger passenger;

    @ManyToOne
    @JoinColumn(name="applicationID",referencedColumnName = "applicationID",insertable = false, updatable = false,nullable = false)
    private Application application;

    public PassengerPassengerApplicationPK getPassengerPassengerApplicationrId() {
        return passengerPassengerApplicationId;
    }

    public void setPassengerPassengerApplicationrId(PassengerPassengerApplicationPK passengerPassengerApplicationId) {
        this.passengerPassengerApplicationId = passengerPassengerApplicationId;
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
