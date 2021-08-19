package lk.fleet.repository;

import lk.fleet.entity.DriverVehicle;
import lk.fleet.entity.DriverVehiclePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverVehicleRepository extends JpaRepository<DriverVehicle, DriverVehiclePK> {
}
