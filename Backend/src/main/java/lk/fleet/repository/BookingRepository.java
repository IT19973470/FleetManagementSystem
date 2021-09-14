package lk.fleet.repository;

import lk.fleet.entity.Booking;
import lk.fleet.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, String> {

    @Query(value = "from Booking order by bookingDateTime desc")
    List<Booking> getBookings();

    //securityOfficer
    @Query(value = "from Booking where destination=?1" )
    Booking getBookingByDestination(String destination);
}
