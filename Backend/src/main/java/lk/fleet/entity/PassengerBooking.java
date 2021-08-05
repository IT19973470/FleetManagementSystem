package lk.fleet.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class PassengerBooking {

    @Id
    private String passengerBookingId;

    @OneToOne
    private Booking booking;

    public String getPassengerBookingId() {
        return passengerBookingId;
    }

    public void setPassengerBookingId(String passengerBookingId) {
        this.passengerBookingId = passengerBookingId;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}