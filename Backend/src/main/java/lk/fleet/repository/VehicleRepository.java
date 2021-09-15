package lk.fleet.repository;

import lk.fleet.entity.Token;
import lk.fleet.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VehicleRepository extends JpaRepository<Vehicle,String> {


    @Query(value = "from Vehicle where vehicleId=?1")
    Vehicle getVehicleByNumber(String vehicleID);


//    Vehicle getVehicleByVehicleId(String vehicleId);
}
