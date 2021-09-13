package lk.fleet.controller;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.*;
import lk.fleet.service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "userAccount")
public class UserAccountController {

    @Autowired
    private UserAccountService userAccountService;


    @PostMapping(value = "/addGeneralManagerUserAccount")
    public ResponseEntity addGeneralManagerUserAccount(@RequestBody UserAccount userAccount) {
        return ResponseEntity.ok(userAccountService.addGeneralManagerUserAccount(userAccount));
    }

    @PostMapping(value = "/addTransportManagerUserAccount")
    public ResponseEntity addTransportManagerUserAccount(@RequestBody TransportManager transportManager) {
        return ResponseEntity.ok(userAccountService.addTransportManagerUserAccount(transportManager));
    }

    @PostMapping(value = "/addBookingManagementClerkUserAccount")
    public ResponseEntity addBookingManagementClerkUserAccount(@RequestBody BookingManagementClerk bookingManagementClerk) {
        return ResponseEntity.ok(userAccountService.addBookingManagementClerkUserAccount(bookingManagementClerk));
    }

    @PostMapping(value = "/addVehicleDiverManagementClerkUserAccount")
    public ResponseEntity addVehicleDiverManagementClerkUserAccount(@RequestBody VehicleDriverManagementClerk vehicleDriverManagementClerk) {
        return ResponseEntity.ok(userAccountService.addVehicleDiverManagementClerkUserAccount(vehicleDriverManagementClerk));
    }


    @PostMapping(value = "/addAccidentMaintenanceManagerUserAccount")
    public ResponseEntity addAccidentMaintenanceManagerUserAccount(@RequestBody AccidentMaintenanceManager accidentMaintenanceManager) {
        return ResponseEntity.ok(userAccountService.addAccidentMaintenanceManagerUserAccount(accidentMaintenanceManager));
    }

    @PostMapping(value = "/addSecurityOfficerUserAccount")
    public ResponseEntity addSecurityOfficerUserAccount(@RequestBody SecurityOfficer securityOfficer) {
        return ResponseEntity.ok(userAccountService.addSecurityOfficerUserAccount(securityOfficer));

    }

    @PostMapping(value = "/login")
    public ResponseEntity login(@RequestBody UserAccount userAccount) {
        return ResponseEntity.ok(userAccountService.login(userAccount));
    }

    @PutMapping(value = "/updateUserAccount/{employeeID}")
    public ResponseEntity updateUserAccount(@PathVariable String employeeID, @RequestBody UserAccount userAccount) {
        return ResponseEntity.ok(userAccountService.updateUserAccount(employeeID, userAccount));
    }

    @DeleteMapping(value = "/deleteUserAccount/{employeeID}")
    public ResponseEntity deleteUserAccount(@PathVariable String employeeID) {
        return ResponseEntity.ok(userAccountService.deleteUserAccount(employeeID));
    }

    @GetMapping(value = "/getUserAccounts")
    public ResponseEntity getUserAccounts() {
        return ResponseEntity.ok(userAccountService.getUserAccounts());
    }

    @GetMapping(value = "/getUserAccountsForApplicants")
    public ResponseEntity getUserAccountsForApplicants() {
        return ResponseEntity.ok(userAccountService.getUserAccountsForApplicants());
    }

    @GetMapping(value = "/getTransportRequests")
    public ResponseEntity getTransportRequests() {
        return ResponseEntity.ok(userAccountService.getTransportRequests());
    }

    @GetMapping(value = "/getUserAccountByID/{employeeID}")
    public ResponseEntity getUserAccountByID(@PathVariable String employeeID) {
        return ResponseEntity.ok(userAccountService.getUserAccountByID(employeeID));
    }

    @GetMapping(value = "/approveUserAccount/{employeeID}/{approval}")
    public ResponseEntity approveUserAccount(@PathVariable String employeeID, @PathVariable boolean approval) {
        return ResponseEntity.ok(userAccountService.approveUserAccount(employeeID, approval));
    }

    @GetMapping(value = "/approveTransport/{applicationID}/{approval}")
    public ResponseEntity approveTransport(@PathVariable String applicationID, @PathVariable boolean approval) {
        return ResponseEntity.ok(userAccountService.approveTransport(applicationID, approval));
    }

    @GetMapping(value = "/getTransportApplication")
    public List<ApplicationDTO> getTransportApplication() {
        return userAccountService.getTransportApplication();
    }

//    @GetMapping(value = "/getTransport")
//    public List<PassengerApplicationDTO> getTransport(){
//        return userAccountService.getTransport();
//    }

//    @PutMapping(value = "/updateGeneralManagerUserAccount/{employeeID}")
//    public ResponseEntity updateGeneralManagerUserAccount(@PathVariable String employeeID, @RequestBody UserAccount userAccount){
//        return ResponseEntity.ok(userAccountService.updateGeneralManagerUserAccount(employeeID, userAccount));
//    }

//    @PutMapping(value = "/updateTransportManagerAccount/{transportManagerId}")
//    public ResponseEntity updateTransportManagerAccount(@PathVariable String transportManagerId, @RequestBody TransportManager transportManager){
//        return ResponseEntity.ok(userAccountService.updateTransportManagerAccount(transportManagerId, transportManager));
//    }
//


//    @PutMapping(value = "/updateBookingManagementClerkAccount/{bookingManagementClerkId}")
//    public ResponseEntity updateBookingManagementClerkAccount(@PathVariable String bookingManagementClerkId, @RequestBody BookingManagementClerk bookingManagementClerk){
//        return ResponseEntity.ok(userAccountService.updateBookingManagementClerkAccount(bookingManagementClerkId, bookingManagementClerk));
//    }
//
//    @PutMapping(value = "/updateVehicleDiverManagementClerkAccount/{vehicleDriverManagementId}")
//    public ResponseEntity updateVehicleDiverManagementClerkAccount(@PathVariable String vehicleDriverManagementId, @RequestBody VehicleDriverManagementClerk vehicleDriverManagementClerk){
//        return ResponseEntity.ok(userAccountService.updateVehicleDiverManagementClerkAccount(vehicleDriverManagementId, vehicleDriverManagementClerk));
//    }
//
//    @PutMapping(value = "/updateSecurityOfficerAccount/{securityOfficerId}")
//    public ResponseEntity updateSecurityOfficerAccount(@PathVariable String securityOfficerId, @RequestBody SecurityOfficer securityOfficer){
//        return ResponseEntity.ok(userAccountService.updateSecurityOfficerAccount(securityOfficerId, securityOfficer));
//    }

//    @GetMapping(value = "/getAllUserAccountRequestsByEmployeeID/{deliveryType}/{date}")
//    public ResponseEntity getAllDeliveriesByDate(@PathVariable String deliveryType, @PathVariable String date) {
//        return ResponseEntity.ok(deliveryService.getAllDeliveriesByDate(deliveryType, date));
//    }
}