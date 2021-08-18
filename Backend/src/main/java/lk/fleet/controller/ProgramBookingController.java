package lk.fleet.controller;

import lk.fleet.entity.Booking;
import lk.fleet.entity.ProgramBooking;
import lk.fleet.entity.UserAccount;
import lk.fleet.service.ProgramBookingService;
import lk.fleet.service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "userAccount")
public class ProgramBookingController {

    @Autowired
    private ProgramBookingService programBookingService;


    @PostMapping(value = "/addProgramBooking")
    public ResponseEntity addProgramBooking(@RequestBody ProgramBooking programBooking){
        return ResponseEntity.ok(programBookingService.addProgramBooking(programBooking));
    }

    @DeleteMapping(value = "/deleteProgramBooking/{programBookingId}")
    public ResponseEntity deleteProgramBooking(@PathVariable String programBookingId){
        return ResponseEntity.ok(programBookingService.deleteBooking(programBookingId));
    }
}
