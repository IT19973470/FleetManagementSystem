package lk.fleet.controller;

import lk.fleet.entity.Driver;
import lk.fleet.entity.OverTime;
import lk.fleet.service.OverTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/"+"overTime")
public class OverTimeController {

    @Autowired
    private OverTimeService overTimeService;

    @PostMapping(value = "/addOT")
    public ResponseEntity addOT(@RequestBody OverTime overTime){
        return ResponseEntity.ok(overTimeService.addOT(overTime));
    }

    @PutMapping(value = "/updateOT/{overTimeID}")
    public ResponseEntity updateOT(@PathVariable String overTimeID, @RequestBody OverTime overTime){
        return ResponseEntity.ok(overTimeService.updateOT(overTimeID,overTime));
    }

    @DeleteMapping(value = "/deleteOT/{overTimeID}")
    public ResponseEntity deleteOT(@PathVariable String overTimeID){
        return ResponseEntity.ok(overTimeService.deleteOT(overTimeID));
    }
}