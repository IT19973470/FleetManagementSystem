package lk.fleet.service;

import lk.fleet.dto.VehicleDTO;
import lk.fleet.entity.Vehicle;

import java.util.List;

public interface VehicleService {

    VehicleDTO addVehicle(Vehicle vehicle);

    VehicleDTO updateVehicle(String vehicleID, Vehicle vehicle);

    boolean deleteVehicle(String vehicleID);

    List<VehicleDTO> getAllVehicles();
    
    List<VehicleDTO> getVehicleByNumber(String vehicleID);

    //SecurityOfficer
    VehicleDTO updateVehicleAvailability (String vehicleID, Vehicle vehicle);

//    List<VehicleDTO> getVehicleByNumber(String vehicleNumber);
}
