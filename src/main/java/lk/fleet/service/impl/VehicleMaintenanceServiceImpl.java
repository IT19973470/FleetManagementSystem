package lk.fleet.service.impl;

import lk.fleet.dto.VehicleMaintenanceDTO;
import lk.fleet.entity.VehicleMaintenance;
import lk.fleet.repository.VehicleMaintenanceRepository;
import lk.fleet.service.VehicleMaintenanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VehicleMaintenanceServiceImpl implements VehicleMaintenanceService {

    @Autowired
    public VehicleMaintenanceRepository vehicleMaintenanceRepository;

    @Override
    public VehicleMaintenanceDTO addMaintenance(VehicleMaintenance vehicleMaintenance) {
        return new VehicleMaintenanceDTO(vehicleMaintenanceRepository.save(vehicleMaintenance));
    }

    @Override
    public VehicleMaintenanceDTO updateVehicleMaintenance(String maintenanceID, VehicleMaintenance vehicleMaintenance) {
        Optional<VehicleMaintenance> optionalVehicleMaintenance = vehicleMaintenanceRepository.findById(maintenanceID);
        if(optionalVehicleMaintenance.isPresent()){
            VehicleMaintenance vehicleMaintenanceObj = optionalVehicleMaintenance.get();
            vehicleMaintenanceObj.setMaintenanceStatus(vehicleMaintenance.isMaintenanceStatus());
            vehicleMaintenanceObj.setCompanyName(vehicleMaintenance.getCompanyName());
            vehicleMaintenanceObj.setMaintenanceType(vehicleMaintenance.getMaintenanceType());
            return new VehicleMaintenanceDTO(vehicleMaintenanceRepository.save(vehicleMaintenanceObj));
        }
        return null;
    }

    @Override
    public boolean deleteVehicleMaintenance(String maintenanceID) {
        vehicleMaintenanceRepository.deleteById(maintenanceID);
        return true;
    }

}
