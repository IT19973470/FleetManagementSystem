package lk.fleet.entity;


import javax.persistence.*;

@Entity
public class VipBooking {
    @Id
    private String vipBookingId;

    @OneToOne
    private Booking booking;

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

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
