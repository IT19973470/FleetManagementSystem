package lk.fleet.service.impl;

import lk.fleet.dto.VehicleDTO;
import lk.fleet.entity.Vehicle;
import lk.fleet.repository.VehicleRepository;
import lk.fleet.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Override
    public VehicleDTO addVehicle(Vehicle vehicle) {
        return new VehicleDTO(vehicleRepository.save(vehicle));
    }

    @Override
    public VehicleDTO updateVehicle(String vehicleID, Vehicle vehicle) {
        Optional<Vehicle> optionalVehicle = vehicleRepository.findById(vehicleID);
        if (optionalVehicle.isPresent()) {
            Vehicle vehicleObj = optionalVehicle.get();
            vehicleObj.setVehicleId(vehicle.getVehicleId());
            vehicleObj.setVehicleType(vehicle.getVehicleType());
            vehicleObj.setModel(vehicle.getModel());
            vehicleObj.setNoOfSeats(vehicle.getNoOfSeats());
            vehicleObj.setInitialMeter(vehicle.getInitialMeter());
            vehicleObj.setServiceMeter(vehicle.getServiceMeter());
            vehicleObj.setFuelType(vehicle.getFuelType());
            vehicleObj.setOccupied(vehicle.isOccupied());
            vehicleObj.setFuelConsumption(vehicle.getFuelConsumption());
            vehicleObj.setFuelBalance(vehicle.getFuelBalance());
            return new VehicleDTO(vehicleRepository.save(vehicleObj));
        }
        return null;
    }

    @Override
    public boolean deleteVehicle(String vehicleID) {
        vehicleRepository.deleteById(vehicleID);
        return true;
    }
}
