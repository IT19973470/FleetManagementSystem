package lk.fleet.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class VipBooking {
    @Id
    private String vipBookingId;

    @ManyToOne
    @JoinColumn(nullable = false)
    private VipMember vipMember;

    public VipMember getVipMember() {
        return vipMember;
    }

    public void setVipMember(VipMember vipMember) {
        this.vipMember = vipMember;
    }

    public String getVipBookingId() {
        return vipBookingId;
    }

    public void setVipBookingId(String vipBookingId) {
        this.vipBookingId = vipBookingId;
    }
}
