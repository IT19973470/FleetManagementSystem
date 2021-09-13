package lk.fleet.service.impl;

import lk.fleet.dto.DriverVehicleDTO;
import lk.fleet.entity.DriverVehicle;
import lk.fleet.entity.DriverVehiclePK;
import lk.fleet.repository.DriverVehicleRepository;
import lk.fleet.service.DriverVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DriverVehicleImpl implements DriverVehicleService {
    @Autowired
    private DriverVehicleRepository driverVehicleRepository;
    @Override
    public DriverVehicleDTO addDriverVehicle(DriverVehicle driverVehicle){
        driverVehicle.setDriverVehicleID(new DriverVehiclePK(driverVehicle.getDriver().getDriverID(),driverVehicle.getVehicle().getVehicleId()));
        return new DriverVehicleDTO(driverVehicleRepository.save(driverVehicle));
    }


}
