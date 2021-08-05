package lk.fleet.repository;

import lk.fleet.entity.SpecialBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecialBookingRepository extends JpaRepository<SpecialBooking, String> {
}
