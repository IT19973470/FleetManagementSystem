package lk.fleet.repository;

import lk.fleet.entity.VehicleAccident;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleAccidentRepository extends JpaRepository<VehicleAccident,String> {
}
