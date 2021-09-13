package lk.fleet.controller;

import lk.fleet.entity.DriverVehicle;
import lk.fleet.entity.Vehicle;
import lk.fleet.service.DriverVehicleService;
import lk.fleet.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value="fleet/"+"driverVehicle")
public class DriverVehicleController {
    @Autowired
    private DriverVehicleService driverVehicleServicee;

    @PostMapping(value = "/addDriverVehicle")
    public ResponseEntity addDriverVehicle(@RequestBody DriverVehicle driverVehicle){
        return ResponseEntity.ok(driverVehicleServicee.addDriverVehicle(driverVehicle));
    }
}
