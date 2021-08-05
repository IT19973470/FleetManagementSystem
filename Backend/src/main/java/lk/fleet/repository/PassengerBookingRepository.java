package lk.fleet.repository;

import lk.fleet.entity.PassengerBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassengerBookingRepository extends JpaRepository<PassengerBooking, String> {
}
