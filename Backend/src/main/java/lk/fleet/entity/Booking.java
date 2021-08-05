package lk.fleet.entity;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
public class Booking {

    @Id
    private String bookingId;
    private LocalDateTime bookingDateTime;
    private String destination;
    private boolean bookingStatus;

    @ManyToOne
    @JoinColumn(nullable = false)
    private BookingManagementClerk bookingManagementClerk;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Shift shifts;


    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public LocalDateTime getBookingDateTime() {
        return bookingDateTime;
    }

    public void setBookingDateTime(LocalDateTime bookingDateTime) {
        this.bookingDateTime = bookingDateTime;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public boolean isBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(boolean bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public BookingManagementClerk getBookingManagementClerk() {
        return bookingManagementClerk;
    }

    public void setBookingManagementClerk(BookingManagementClerk bookingManagementClerk) {
        this.bookingManagementClerk = bookingManagementClerk;
    }

    public Shift getShifts() {
        return shifts;
    }

    public void setShifts(Shift shifts) {
        this.shifts = shifts;
    }
}
