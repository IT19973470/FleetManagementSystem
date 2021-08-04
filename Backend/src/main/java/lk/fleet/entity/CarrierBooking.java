package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CarrierBooking {

    @Id
    private String carrierBookingId;

    public String getCarrierBookingId() {
        return carrierBookingId;
    }

    public void setCarrierBookingId(String carrierBookingId) {
        this.carrierBookingId = carrierBookingId;
    }
}

