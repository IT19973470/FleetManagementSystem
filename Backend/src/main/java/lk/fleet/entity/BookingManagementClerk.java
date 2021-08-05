package lk.fleet.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
public class BookingManagementClerk {
    @Id
    private String bookingManagementClerkId;

    @OneToOne
    private UserAccount userAccount;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "bookingManagementClerk")
    private Set <Booking> bookings;

    public Set<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(Set<Booking> bookings) {
        this.bookings = bookings;
    }

    public String getBookingManagementClerkId() {
        return bookingManagementClerkId;
    }

    public void setBookingManagementClerkId(String bookingManagementClerkId) {
        this.bookingManagementClerkId = bookingManagementClerkId;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }
}
