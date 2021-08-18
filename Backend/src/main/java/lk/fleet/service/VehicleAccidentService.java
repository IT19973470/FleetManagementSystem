package lk.fleet.service;

import lk.fleet.dto.VehicleAccidentDTO;
import lk.fleet.entity.VehicleAccident;

public interface VehicleAccidentService {

    VehicleAccidentDTO addAccident(VehicleAccident vehicleAccident);

    VehicleAccidentDTO updateVehicleAccident (String vehicleAccidentID, VehicleAccident vehicleAccident);

    boolean deleteAccident (String vehicleAccidentID);
}

