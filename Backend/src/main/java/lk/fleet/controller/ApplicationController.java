package lk.fleet.controller;

import lk.fleet.dto.ApplicationDTO;
//import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.Application;
import lk.fleet.entity.Passenger;
import lk.fleet.entity.PassengerApplication;
import lk.fleet.entity.PassengerPassengerApplication;
import lk.fleet.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="application")
public class ApplicationController {
    @Autowired
    private  ApplicationService applicationService;


//    @PostMapping(value ="/newApplication")   // jarawa epa
//    public Application addApplication(@RequestBody Application application) {
//        return applicationService.addApplication(application);
//    }
//        @PostMapping(value ="/newApplication")
//        public PassengerApplication addPassengerApplication(@RequestBody PassengerApplication application){
//             return applicationService.addPassengerApplication(application);
//         }

//    @PostMapping(value ="/newApplication1")
//    public Passenger addPassengerApplication1(@RequestBody Passenger application){
//        return applicationService.addPassenger(application);
//    }

    @PostMapping(value ="/Insertall")
    public PassengerPassengerApplication addpassenerApplicationpassengerPassengerApplicationapplication(@RequestBody PassengerPassengerApplication passengerPassengerApplication){
        return applicationService.addpassenerApplicationpassengerPassengerApplicationapplication(passengerPassengerApplication);
    }
        @PutMapping(value = "/updateApplication/{applicationID}")
        public ResponseEntity<ApplicationDTO> updateApplication(@PathVariable String applicationID, @RequestBody Application application){
            return ResponseEntity.ok(applicationService.updateApplication(applicationID, application));
        }
    @GetMapping(value = "/getApplication")
    public List<Application> getPassengerApp(){
        return applicationService.getPassengerApp();
    }
    @GetMapping(value = "/getPassengerApplication")
    public List<PassengerApplication> getAPassengerApp(){
        return applicationService.getAPassengerApp();
    }

    @GetMapping(value = "/getdto")
    public List<PassengerApplicationDTO> getdto(){
        return applicationService.getdto();
    }

}