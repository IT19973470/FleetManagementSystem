package lk.fleet.repository;

import lk.fleet.entity.BookingApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassengerBookingRepository extends JpaRepository<BookingApplication, String> {
}
