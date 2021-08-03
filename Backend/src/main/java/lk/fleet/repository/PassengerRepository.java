package lk.fleet.repository;

import lk.fleet.entity.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassengerRepository extends JpaRepository<Passenger,String> {
}
