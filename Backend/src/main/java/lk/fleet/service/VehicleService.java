package lk.fleet.service;

import lk.fleet.dto.VehicleDTO;
import lk.fleet.entity.Vehicle;

public interface VehicleService {
    VehicleDTO addVehicle(Vehicle vehicle);

    VehicleDTO updateVehicle(String vehicleID, Vehicle vehicle);

    boolean deleteVehicle(String vehicleID);
}
