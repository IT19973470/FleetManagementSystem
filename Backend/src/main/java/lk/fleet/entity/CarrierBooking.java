package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class CarrierBooking {

    @Id
    private String carrierBookingId;

    @OneToOne
    private Booking booking;

    public String getCarrierBookingId() {
        return carrierBookingId;
    }

    public void setCarrierBookingId(String carrierBookingId) {
        this.carrierBookingId = carrierBookingId;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}

