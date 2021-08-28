package lk.fleet.service.impl;


import lk.fleet.dto.VehicleAccidentDTO;
import lk.fleet.entity.VehicleAccident;
import lk.fleet.repository.VehicleAccidentRepository;
import lk.fleet.service.VehicleAccidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VehicleAccidentServiceImpl implements VehicleAccidentService {

    @Autowired
    private VehicleAccidentRepository vehicleAccidentRepository;

    @Override
    public VehicleAccidentDTO addAccident(VehicleAccident vehicleAccident) {
        LocalDateTime localDateTime = LocalDateTime.now();
        vehicleAccident.setVehicleAccidentID("VCM" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
        return new VehicleAccidentDTO(vehicleAccidentRepository.save(vehicleAccident));
    }

    @Override
    public VehicleAccidentDTO updateVehicleAccident(String vehicleAccidentID, VehicleAccident vehicleAccident) {
        Optional<VehicleAccident> optionalVehicleAccident = vehicleAccidentRepository.findById(vehicleAccidentID);
        if (optionalVehicleAccident.isPresent()) {
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


    @Override
    public List<VehicleAccidentDTO> getVehicleAccidents() {
        List<VehicleAccident> vehicleAccidents = vehicleAccidentRepository.findAll();
        List<VehicleAccidentDTO> vehicleAccidentDTOS = new ArrayList<>();
        for (VehicleAccident vehicleAccident : vehicleAccidents) {
            vehicleAccidentDTOS.add(new VehicleAccidentDTO(vehicleAccident));
        }
        return vehicleAccidentDTOS;
    }

}
