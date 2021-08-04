package lk.fleet.entity;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class VipBooking {
    @Id
    private String vipBookingId;

    public String getVipBookingId() {
        return vipBookingId;
    }

    public void setVipBookingId(String vipBookingId) {
        this.vipBookingId = vipBookingId;
    }
}
