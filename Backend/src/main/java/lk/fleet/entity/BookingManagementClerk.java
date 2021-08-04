package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BookingManagementClerk {
    @Id
    private String bookingManagementClerkId;

    public String getBookingManagementClerkId() {
        return bookingManagementClerkId;
    }

    public void setBookingManagementClerkId(String bookingManagementClerkId) {
        this.bookingManagementClerkId = bookingManagementClerkId;
    }
}
