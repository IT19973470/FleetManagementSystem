package lk.fleet.controller;


import lk.fleet.entity.*;
import lk.fleet.service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "userAccount")
public class UserAccountController {

    @Autowired
    private UserAccountService userAccountService;


    @PostMapping(value = "/addGeneralManagerUserAccount")
    public ResponseEntity addGeneralManagerUserAccount(@RequestBody UserAccount userAccount){
        return ResponseEntity.ok(userAccountService.addGeneralManagerUserAccount(userAccount));
    }

    @PostMapping(value = "/addTransportManagerUserAccount")
    public ResponseEntity addTransportManagerUserAccount(@RequestBody TransportManager transportManager){
        return ResponseEntity.ok(userAccountService.addTransportManagerUserAccount(transportManager));
    }

    @PostMapping(value = "/addBookingManagementClerkUserAccount")
    public ResponseEntity addBookingManagementClerkUserAccount(@RequestBody BookingManagementClerk bookingManagementClerk){
        return ResponseEntity.ok(userAccountService.addBookingManagementClerkUserAccount(bookingManagementClerk));
    }

    @PostMapping(value = "/addVehicleDiverManagementClerkUserAccount")
    public ResponseEntity addVehicleDiverManagementClerkUserAccount(@RequestBody VehicleDriverManagementClerk vehicleDriverManagementClerk) {
        return ResponseEntity.ok(userAccountService.addVehicleDiverManagementClerkUserAccount(vehicleDriverManagementClerk));
    }

    @PostMapping(value = "/addSecurityOfficerUserAccount")
    public ResponseEntity addSecurityOfficerUserAccount(@RequestBody SecurityOfficer securityOfficer) {
        return ResponseEntity.ok(userAccountService.addSecurityOfficerUserAccount(securityOfficer));
    }

    @PostMapping(value = "/login")
    public ResponseEntity login(@RequestBody UserAccount userAccount){
        return ResponseEntity.ok(userAccountService.login(userAccount));
    }



    @PutMapping(value = "/updateGeneralManagerUserAccount/{employeeID}")
    public ResponseEntity updateGeneralManagerUserAccount(@PathVariable String employeeID, @RequestBody UserAccount userAccount){
        return ResponseEntity.ok(userAccountService.updateGeneralManagerUserAccount(employeeID, userAccount));
    }

    @PutMapping(value = "/updateTransportManagerAccount/{transportManagerId}")
    public ResponseEntity updateTransportManagerAccount(@PathVariable String transportManagerId, @RequestBody TransportManager transportManager){
        return ResponseEntity.ok(userAccountService.updateTransportManagerAccount(transportManagerId, transportManager));
    }

    @PutMapping(value = "/updateBookingManagementClerkAccount/{bookingManagementClerkId}")
    public ResponseEntity updateBookingManagementClerkAccount(@PathVariable String bookingManagementClerkId, @RequestBody BookingManagementClerk bookingManagementClerk){
        return ResponseEntity.ok(userAccountService.updateBookingManagementClerkAccount(bookingManagementClerkId, bookingManagementClerk));
    }

    @PutMapping(value = "/updateVehicleDiverManagementClerkAccount/{vehicleDriverManagementId}")
    public ResponseEntity updateVehicleDiverManagementClerkAccount(@PathVariable String vehicleDriverManagementId, @RequestBody VehicleDriverManagementClerk vehicleDriverManagementClerk){
        return ResponseEntity.ok(userAccountService.updateVehicleDiverManagementClerkAccount(vehicleDriverManagementId, vehicleDriverManagementClerk));
    }

    @PutMapping(value = "/updateSecurityOfficerAccount/{securityOfficerId}")
    public ResponseEntity updateSecurityOfficerAccount(@PathVariable String securityOfficerId, @RequestBody SecurityOfficer securityOfficer){
        return ResponseEntity.ok(userAccountService.updateSecurityOfficerAccount(securityOfficerId, securityOfficer));
    }


    @DeleteMapping(value = "/deleteUserAccount/{employeeID}")
    public ResponseEntity deleteUserAccount(@PathVariable String employeeID){
        return ResponseEntity.ok(userAccountService.deleteUserAccount(employeeID));
    }
}
