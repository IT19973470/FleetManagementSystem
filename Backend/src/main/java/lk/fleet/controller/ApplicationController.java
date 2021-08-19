package lk.fleet.controller;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.*;
import lk.fleet.service.ApplicationItemService;
import lk.fleet.service.ApplicationPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="application")
public class ApplicationController {
    @Autowired
    private ApplicationPassengerService applicationPassengerService;
    @Autowired
    private ApplicationItemService applicationItemService;

//    @PostMapping(value ="/newApplication")   // jarawa epa
//    public Application addApplication(@RequestBody Application application) {
//        return applicationService.addApplication(application);
//    }
//        @PostMapping(value ="/newApplication")
//        public PassengerApplication addPassengerApplication(@RequestBody PassengerApplication application){
//             return applicationService.addPassengerApplication(application);
//         }

    @PostMapping(value ="/newApplication1")
    public Passenger addPassengerApplication1(@RequestBody Passenger application){
        return applicationPassengerService.addPassenger(application);
    }

    @PostMapping(value ="/Insertall")
    public PassengerPassengerApplication addpassenerApplicationpassengerPassengerApplicationapplication(@RequestBody PassengerPassengerApplication passengerPassengerApplication){
        return applicationPassengerService.addpassenerApplicationpassengerPassengerApplicationapplication(passengerPassengerApplication);
    }

    @PostMapping(value ="/InserItall")
    public ItemItemApplication addItemApplication(@RequestBody ItemItemApplication itemApplication){
        return applicationItemService.addItemApplication(itemApplication);
    }


        @PutMapping(value = "/updateApplication/{applicationID}")
        public ResponseEntity<ApplicationDTO> updateApplication(@PathVariable String applicationID, @RequestBody Application application){
            return ResponseEntity.ok(applicationPassengerService.updateApplication(applicationID, application));
        }
    @GetMapping(value = "/getApplication")
    public List<Application> getPassengerApp(){
        return applicationPassengerService.getPassengerApp();
    }
    @GetMapping(value = "/getPassengerApplication")
    public List<PassengerApplication> getAPassengerApp(){
        return applicationPassengerService.getAPassengerApp();
    }

    @GetMapping(value = "/getdto")
    public List<PassengerApplicationDTO> getdto(){
        return applicationPassengerService.getdto();
    }

}