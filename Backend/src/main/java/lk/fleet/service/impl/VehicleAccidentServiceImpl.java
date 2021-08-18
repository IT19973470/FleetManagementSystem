package lk.fleet.service.impl;

import lk.fleet.dto.VehicleAccidentDTO;
import lk.fleet.entity.VehicleAccident;
import lk.fleet.repository.VehicleAccidentRepository;
import lk.fleet.service.VehicleAccidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VehicleAccidentServiceImpl implements VehicleAccidentService {

    @Autowired
    private VehicleAccidentRepository vehicleAccidentRepository;

    @Override
    public VehicleAccidentDTO addAccident(VehicleAccident vehicleAccident) {
        return new VehicleAccidentDTO(vehicleAccidentRepository.save(vehicleAccident));
    }

    @Override
    public VehicleAccidentDTO updateVehicleAccident(String vehicleAccidentID, VehicleAccident vehicleAccident) {
        Optional <VehicleAccident> optionalVehicleAccident = vehicleAccidentRepository.findById(vehicleAccidentID);
        if(optionalVehicleAccident.isPresent()){
           VehicleAccident vehicleAccidentObj = optionalVehicleAccident.get();
           vehicleAccidentObj.setInsuranceStatus(vehicleAccident.isInsuranceStatus());
           return new VehicleAccidentDTO(vehicleAccidentRepository.save(vehicleAccidentObj));
        }
        return null;
    }

    @Override
    public boolean deleteAccident(String vehicleAccidentID) {
        vehicleAccidentRepository.deleteById(vehicleAccidentID);
        return true;
    }

    

}
