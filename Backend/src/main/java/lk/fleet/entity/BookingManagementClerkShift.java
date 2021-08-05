package lk.fleet.entity;

import javax.persistence.*;

@Entity
public class BookingManagementClerkShift {

    @EmbeddedId
    private BookingManagementClerkShiftPK bookingManagementClerkShiftPK;

    @MapsId("bookingManagementClerkId")
    @ManyToOne
    @JoinColumn(name = "bookingManagementClerkId", referencedColumnName = "bookingManagementClerkId", insertable = false, updatable = false, nullable = false)
    private BookingManagementClerk bookingManagementClerk;

    @MapsId("shiftId")
    @ManyToOne
    @JoinColumn(name = "shiftId", referencedColumnName = "shiftId", insertable = false, updatable = false, nullable = false)
    private Shift shift;

    public BookingManagementClerkShiftPK getBookingManagementClerkShiftPK() {
        return bookingManagementClerkShiftPK;
    }

    public void setBookingManagementClerkShiftPK(BookingManagementClerkShiftPK bookingManagementClerkShiftPK) {
        this.bookingManagementClerkShiftPK = bookingManagementClerkShiftPK;
    }

    public BookingManagementClerk getBookingManagementClerk() {
        return bookingManagementClerk;
    }

    public void setBookingManagementClerk(BookingManagementClerk bookingManagementClerk) {
        this.bookingManagementClerk = bookingManagementClerk;
    }

    public Shift getShift() {
        return shift;
    }

    public void setShift(Shift shift) {
        this.shift = shift;
    }
}
