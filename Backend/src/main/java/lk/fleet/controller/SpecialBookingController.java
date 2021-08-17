package lk.fleet.controller;

import lk.fleet.entity.Booking;
import lk.fleet.service.BookingService;
import lk.fleet.service.SpecialBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleet/" + "userAccount")
public class SpecialBookingController {

    @Autowired
    private SpecialBookingService specialBookingService;

    @DeleteMapping(value = "/deleteSpecialBooking/{specialBookingId}")
    public ResponseEntity deleteSpecialBooking(@PathVariable String specialBookingId){
        return ResponseEntity.ok(specialBookingService.deleteSpecialBooking(specialBookingId));
    }
}
