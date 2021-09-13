package lk.fleet.repository;

import lk.fleet.entity.VehicleAccident;
import lk.fleet.entity.VehicleMaintenance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VehicleMaintenanceRepository extends JpaRepository<VehicleMaintenance, String> {

    @Query(value = "from VehicleAccident where driverVehicle.vehicle.vehicleId=?1")
    VehicleMaintenance getMaintenanceById(String vehicleID);
}
