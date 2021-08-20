package lk.fleet.service;

import lk.fleet.dto.VehicleMaintenanceDTO;
import lk.fleet.entity.VehicleMaintenance;

public interface VehicleMaintenanceService {

    VehicleMaintenanceDTO addMaintenance(VehicleMaintenance vehicleMaintenance);

    VehicleMaintenanceDTO updateVehicleMaintenance(String maintenanceID, VehicleMaintenance vehicleMaintenance);

    boolean deleteVehicleMaintenance(String maintenanceID);
}

