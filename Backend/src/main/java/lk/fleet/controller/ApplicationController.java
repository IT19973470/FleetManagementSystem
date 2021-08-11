package lk.fleet.controller;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.entity.Application;
import lk.fleet.entity.ItemApplication;
import lk.fleet.entity.PassengerApplication;
import lk.fleet.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping(value ="/newApplication")
    public PassengerApplication addPassengerApplication(@RequestBody PassengerApplication application){
        return applicationService.addPassengerApplication(application);
    }

        @PutMapping(value = "/updateApplication/{applicationID}")
        public ResponseEntity<ApplicationDTO> updateApplication(@PathVariable String applicationID, @RequestBody Application application){
            return ResponseEntity.ok(applicationService.updateApplication(applicationID, application));
        }

}