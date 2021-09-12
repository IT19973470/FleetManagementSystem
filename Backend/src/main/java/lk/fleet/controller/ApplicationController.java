package lk.fleet.controller;

import lk.fleet.dto.*;
import lk.fleet.entity.*;
import lk.fleet.service.ApplicationItemService;
import lk.fleet.service.ApplicationPassengerService;
import lk.fleet.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="fleetmanagement/"+"application")
public class ApplicationController {
    @Autowired
    private ApplicationPassengerService applicationPassengerService;
    @Autowired
    private ApplicationItemService applicationItemService;
    @Autowired
    private ApplicationService applicationService;

    @PostMapping(value ="/newapplication")   // jarawa epa
    public ResponseEntity addApplication(@RequestBody Application application) {
        return ResponseEntity.ok(applicationPassengerService.addApplication(application));
    }
//        @PostMapping(value ="/newApplication")
//        public PassengerApplication addPassengerApplication(@RequestBody PassengerApplication application){
//             return applicationService.addPassengerApplication(application);
//         }
    @PostMapping(value ="/addPassengers")
    public ResponseEntity addPassengerpassenger(@RequestBody PassengerPassengerApplication passengerPassengerApplication) {
        return ResponseEntity.ok(applicationPassengerService.addPassengerpassenger(passengerPassengerApplication));
    }

    @GetMapping(value = "/getPassengers")
    public List<PassengerDTO> getPassengers(){
        return applicationPassengerService.getPassengers();
    }


    @PostMapping(value ="/AddItem")
    public ResponseEntity addItem(@RequestBody Application application) {
        return ResponseEntity.ok(applicationItemService.addItemApplication(application));
    }
    @GetMapping(value ="/AddPassengerApp/{ApplicationID}/{applicationID}")
    public ResponseEntity passengerApplication(@PathVariable String ApplicationID,@PathVariable String applicationID) {
        return ResponseEntity.ok(applicationPassengerService.passengerApplication(ApplicationID,applicationID));
    }

    @PostMapping(value ="/newApplication1")
    public ResponseEntity addPassengerApplication1(@RequestBody Passenger passenger){
        return ResponseEntity.ok(applicationPassengerService.addPassenger(passenger));
    }

    @PostMapping(value ="/Insertall")
    public ResponseEntity addPassengerPassengerApplication(@RequestBody PassengerPassengerApplication passengerPassengerApplication){
        return ResponseEntity.ok(applicationPassengerService.addPassengerPassengerApplication(passengerPassengerApplication));
    }

    @PostMapping(value ="/InserItall")
    public ResponseEntity addItemItemApplication(@RequestBody ItemItemApplication itemApplication){
        return ResponseEntity.ok(applicationItemService.addItemItemApplication(itemApplication));
    }
    @DeleteMapping(value = "/deleteApplication/{applicationID}")
    public ResponseEntity deleteBooking(@PathVariable String applicationID){
        return ResponseEntity.ok(applicationService.deleteApplication(applicationID));
    }

    @PutMapping(value = "/updateApplication/{applicationID}")
    public ResponseEntity<ApplicationDTO> updateApplication(@PathVariable String applicationID, @RequestBody Application application){
        return ResponseEntity.ok(applicationService.updateApplication(applicationID, application));
    }

//    @PutMapping(value = "/updatePassengerPassenger/{applicationID}")
//    public ResponseEntity PassengerPassengerApplication(@PathVariable String applicationID, @RequestBody  PassengerPassengerApplication passengerPassengerApplication){
//        return ResponseEntity.ok(applicationPassengerService.UpdatePassengerApp(applicationID, passengerPassengerApplication));
//    }



    @GetMapping(value = "/getApplication")
    public List<ApplicationDTO> getPassengerApp(){
        return applicationPassengerService.getPassengerApp();
    }

    @GetMapping(value = "/getApplicationID/{applicationID}")
    public ApplicationDTO getPassengerApp(@PathVariable String applicationID){
        return applicationPassengerService.getPassengerApp(applicationID);
    }


    @GetMapping(value = "/getPassengerApplication")
    public List<PassengerApplication> getAPassengerApp(){
        return applicationPassengerService.getAPassengerApp();
    }

    @GetMapping(value = "/getBookingApplications")//getdto
    public List<BookingApplicationDTO> getBookingApplications(){
        return applicationPassengerService.getBookingApplications();
    }
//    @GetMapping(value = "/getdto")
//    public List<ApplicationDTO> getdto(){
//        return applicationService.getdto();
//    }
        @DeleteMapping(value = "/deletePassengerApp/{ApplicationID}/{applicationID}")
    public ResponseEntity deleteBooking(@PathVariable String ApplicationID,@PathVariable String applicationID){
    return ResponseEntity.ok(applicationPassengerService.deletePassengerApp(ApplicationID,applicationID));
}

}