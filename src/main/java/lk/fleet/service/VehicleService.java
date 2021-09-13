package lk.fleet.service;

import lk.fleet.dto.VehicleDTO;
import lk.fleet.entity.Vehicle;

import java.util.List;

public interface VehicleService {

    VehicleDTO addVehicle(Vehicle vehicle);

    VehicleDTO updateVehicle(String vehicleID, Vehicle vehicle);

    boolean deleteVehicle(String vehicleID);

    List<VehicleDTO> getAllVehicles();
}
