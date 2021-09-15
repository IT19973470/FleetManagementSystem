package lk.fleet.service.impl;

import lk.fleet.dto.BookingDTO;
import lk.fleet.dto.DeliveryDTO;
import lk.fleet.dto.VehicleDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Delivery;
import lk.fleet.entity.Vehicle;
import lk.fleet.repository.VehicleRepository;
import lk.fleet.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Override
    public VehicleDTO addVehicle(Vehicle vehicle) {
//        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
//        vehicle.setVehicleId("Veh" + dateTime);
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

    //SecurityOfficer
    @Override
    public VehicleDTO updateVehicleAvailability(String vehicleID, Vehicle vehicle) {
        Optional<Vehicle> optionalVehicle = vehicleRepository.findById(vehicleID);
        if (optionalVehicle.isPresent()) {
            Vehicle vehicleObj = optionalVehicle.get();
            vehicleObj.setOccupied(vehicle.isOccupied());
            return new VehicleDTO(vehicleRepository.save(vehicleObj));
        }
        return null;
    }

    @Override
    public boolean deleteVehicle(String vehicleID) {
        vehicleRepository.deleteById(vehicleID);
        return true;
    }

    @Override
    public List<VehicleDTO> getAllVehicles() {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        List<VehicleDTO> vehicleDTOS = new ArrayList<>();
        for (Vehicle vehicle : vehicles) {
            vehicleDTOS.add(new VehicleDTO(vehicle));
        }
        return vehicleDTOS;
    }

    @Override
    public List<VehicleDTO> getVehicleByNumber(String vehicleID) {
        Vehicle VehicleByID = vehicleRepository.getVehicleByNumber(vehicleID);
        List<VehicleDTO> vehicleDTOS = new ArrayList<>();
        vehicleDTOS.add(new VehicleDTO(VehicleByID));
        return vehicleDTOS;
    }

//    @Override
//    public List<VehicleDTO> getVehicleByNumber(String vehicleNumber){
//        Vehicle getVehicleByNumber = vehicleRepository.getVehicleByNumber(vehicleNumber);
//        List<VehicleDTO> vehicleDTOS=new ArrayList<>();
//        vehicleDTOS.add(new VehicleDTO(getVehicleByNumber));
//        return vehicleDTOS;
//    }
}
