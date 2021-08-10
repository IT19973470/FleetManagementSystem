package lk.fleet.controller;

import lk.fleet.entity.Driver;
import lk.fleet.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "driver/"+"driverAccount")
public class DriverController {

    @Autowired
    private DriverService driverService;

    @PostMapping(value = "/addDriver")
    public Driver addDriver(@RequestBody Driver driver){
        return driverService.addDriver(driver);
    }

    @GetMapping(value = "/allDrivers")
    public List<Driver> getAllDrivers(){
        return driverService.getAllDrivers();
    }

//    @GetMapping(value = "/getDriver/{driverID}")
//    public Driver getDriverUsingdriverID(@PathVariable String driverID){
//        return driverService.getDriverByDriverID(driverID);
//    }

    @PostMapping(value = "/updateDriver")
    public Driver updateDriver(@RequestBody Driver driver){
        return driverService.updateDriver(driver);
    }

    @DeleteMapping(value = "/deleteDriver/{driverID}")
    public Driver deleteDriver(@RequestBody Driver driver){
        return driverService.deleteDriver(driver);
    }


}
