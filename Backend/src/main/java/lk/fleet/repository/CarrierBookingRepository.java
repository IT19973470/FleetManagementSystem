package lk.fleet.repository;

import lk.fleet.entity.CarrierBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarrierBookingRepository extends JpaRepository<CarrierBooking, String> {
}
