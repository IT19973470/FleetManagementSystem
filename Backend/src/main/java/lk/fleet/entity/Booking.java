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
    private String bookingStatus;

    @ManyToOne
    @JoinColumn(nullable = false)
    private BookingManagementClerk bookingManagementClerk;

    public BookingManagementClerk getBookingManagementClerk() {
        return bookingManagementClerk;
    }

    public void setBookingManagementClerk(BookingManagementClerk bookingManagementClerk) {
        this.bookingManagementClerk = bookingManagementClerk;
    }

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "booking")
    private Set<Shift> shifts;

    public Set<Shift> getShifts() {
        return shifts;
    }

    public void setShifts(Set<Shift> shifts) {
        this.shifts = shifts;
    }
    //    public Set<Application> getApplications() {
//        return applications;
//    }
//
//    public void setApplications(Set<Application> applications) {
//        this.applications = applications;
//    }
//
//    @OneToMany(cascade = CascadeType.ALL,mappedBy = "booking",fetch = FetchType.EAGER)
//    private Set<Application> applications;

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

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }
}
