package lk.fleet.entity;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PassengerBooking {

    @Id
    private String passengerBookingId;

    public String getPassengerBookingId() {
        return passengerBookingId;
    }

    public void setPassengerBookingId(String passengerBookingId) {
        this.passengerBookingId = passengerBookingId;
    }
}