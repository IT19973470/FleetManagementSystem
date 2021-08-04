package lk.fleet.repository;

import lk.fleet.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle,String> {
    Vehicle getVehicleByVehicleId(String vehicleId);
}
