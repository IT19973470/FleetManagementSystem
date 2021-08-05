package lk.fleet.entity;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class BookingManagementClerkShiftPK implements Serializable {
    private String bookingManagementClerkId;
    private String shiftId;

    public BookingManagementClerkShiftPK(String bookingManagementClerkId, String shiftId) {
        this.bookingManagementClerkId = bookingManagementClerkId;
        this.shiftId = shiftId;
    }

    public BookingManagementClerkShiftPK() {

    }

    public String getBookingManagementClerkId() {
        return bookingManagementClerkId;
    }

    public void setBookingManagementClerkId(String bookingManagementClerkId) {
        this.bookingManagementClerkId = bookingManagementClerkId;
    }

    public String getShiftId() {
        return shiftId;
    }

    public void setShiftId(String shiftId) {
        this.shiftId = shiftId;
    }
}
