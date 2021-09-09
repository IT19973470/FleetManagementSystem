package lk.fleet.controller;

import lk.fleet.entity.Booking;
import lk.fleet.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping(value = "/addBooking")
    public ResponseEntity addBooking(@RequestBody Booking booking){
        return ResponseEntity.ok(bookingService.addBooking(booking));
    }

    @PutMapping(value = "/updateBooking/{bookingId}")
    public ResponseEntity updateBooking(@PathVariable String bookingId, @RequestBody Booking booking){
        return ResponseEntity.ok(bookingService.updateBooking(bookingId, booking));
    }

    @DeleteMapping(value = "/deleteBooking/{bookingId}")
    public ResponseEntity deleteBooking(@PathVariable String bookingId){
        return ResponseEntity.ok(bookingService.deleteBooking(bookingId));
    }

    @GetMapping(value = "/getAllBookings")
    public ResponseEntity getAllBookings() {
        return ResponseEntity.ok(bookingService.getAllBookings());
    }
}
