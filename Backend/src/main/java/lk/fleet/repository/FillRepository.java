package lk.fleet.repository;

import lk.fleet.entity.PassengerPassengerApplication;
import lk.fleet.entity.PassengerPassengeApplicationrPk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FillRepository extends JpaRepository<PassengerPassengerApplication, PassengerPassengeApplicationrPk> {
}
