package lk.fleet.repository;

import lk.fleet.entity.ProgramBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgramBookingRepository extends JpaRepository<ProgramBooking, String> {
}
