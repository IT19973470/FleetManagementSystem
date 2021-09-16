package lk.fleet.controller;

import lk.fleet.dto.VehicleDTO;
import lk.fleet.entity.TVProgram;
import lk.fleet.entity.Vehicle;
import lk.fleet.service.TVProgramService;
import lk.fleet.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "vehicle")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping(value = "/addVehicle")
    public ResponseEntity addVehicle(@RequestBody Vehicle vehicle) {
        return ResponseEntity.ok(vehicleService.addVehicle(vehicle));
    }

    @PutMapping(value = "/updateVehicle/{vehicleID}")
    public ResponseEntity updateVehicle(@PathVariable String vehicleID, @RequestBody Vehicle vehicle) {
        return ResponseEntity.ok(vehicleService.updateVehicle(vehicleID, vehicle));
    }

    @DeleteMapping(value = "/deleteVehicle/{vehicleID}")
    public ResponseEntity deleteVehicle(@PathVariable String vehicleID) {
        return ResponseEntity.ok(vehicleService.deleteVehicle(vehicleID));
    }

    @GetMapping(value = "/getAllVehicles")
    public ResponseEntity getAllVehicles() {
        return ResponseEntity.ok(vehicleService.getAllVehicles());
    }

    @GetMapping(value = "/fuelUpdate/{vehicleID}/{fuelBalance}")
    public ResponseEntity fualUpdate(@PathVariable String vehicleID, @PathVariable double fuelBalance) {
        return ResponseEntity.ok(vehicleService.fualUpdate(vehicleID, fuelBalance));
    }

    //SecurityOfficer
    @PutMapping(value = "/updateVehicleAvailability/{vehicleID}")
    public ResponseEntity updateVehicleAvailability(@PathVariable String vehicleID, @RequestBody Vehicle vehicle) {
        return ResponseEntity.ok(vehicleService.updateVehicleAvailability(vehicleID, vehicle));
    }

    @GetMapping(value = "/getVehicleByNumber/{vehicleNumber}")
    public ResponseEntity getVehicleByNumber(@PathVariable String vehicleNumber) {
        return ResponseEntity.ok(vehicleService.getVehicleByNumber(vehicleNumber));
    }
}