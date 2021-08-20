package lk.fleet.controller;

import lk.fleet.entity.VehicleAccident;
import lk.fleet.entity.VehicleMaintenance;
import lk.fleet.service.VehicleMaintenanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping (value = "fleet/" + "maintenance")

public class VehicleMaintenanceController {

    @Autowired
    private VehicleMaintenanceService vehicleMaintenanceService;

    @PostMapping(value = "/addVehicleMaintenance")
    public ResponseEntity addMaintenance(@RequestBody VehicleMaintenance vehicleMaintenance){
        return ResponseEntity.ok(vehicleMaintenanceService.addMaintenance(vehicleMaintenance));
    }

    @PutMapping(value = "/updateVehicleMaintenance/{maintenanceID}")
    public ResponseEntity updateVehicleMaintenance (@PathVariable String maintenanceID, @RequestBody VehicleMaintenance vehicleMaintenance) {
        return ResponseEntity.ok(vehicleMaintenanceService.updateVehicleMaintenance(maintenanceID, vehicleMaintenance));
    }

    @DeleteMapping(value = "/deleteVehicleMaintenance/{maintenanceID}")
    public ResponseEntity deleteVehicleMaintenance(@PathVariable String maintenanceID) {
        return ResponseEntity.ok(vehicleMaintenanceService.deleteVehicleMaintenance(maintenanceID));
    }

}