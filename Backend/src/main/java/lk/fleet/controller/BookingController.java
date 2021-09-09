package lk.fleet.controller;

import lk.fleet.dto.BookingDTO;
import lk.fleet.dto.PassengerDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Shift;
import lk.fleet.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

//    @GetMapping(value = "/getBookings")
//    public ResponseEntity getBookings() {
//        return ResponseEntity.ok(bookingService.getBookings());
//    }

    @GetMapping(value = "/getBookings")
    public List<BookingDTO> getBookings(){
        return bookingService.getBookings();
    }


    @PostMapping(value = "/addDriverShift")
    public ResponseEntity addDriverShift(@RequestBody Shift shift) {
        return ResponseEntity.ok(bookingService.addDriverShift(shift));
    }

    @PutMapping(value = "/updateDriverShift/{shiftId}")
    public ResponseEntity updateDriverShift(@PathVariable String shiftId, @RequestBody Shift shift) {
        return ResponseEntity.ok(bookingService.updateDriverShift(shiftId, shift));
    }

    @DeleteMapping(value = "/deleteDriverShift/{shiftId}")
    public ResponseEntity deleteDriverShift(@PathVariable String shiftId) {
        return ResponseEntity.ok(bookingService.deleteDriverShift(shiftId));
    }

    @GetMapping(value = "/getDriverVehicles/{driverId}")
    public ResponseEntity getDriver(@PathVariable String driverId) {
        return ResponseEntity.ok(bookingService.getDriverVehicles(driverId));
    }

    @GetMapping(value = "/getDriverShifts")
    public ResponseEntity getDriverShifts() {
        return ResponseEntity.ok(bookingService.getDriverShifts());
    }

    @GetMapping(value = "/getDriverShiftsByDriverId/{driverId}")
    public ResponseEntity getDriverShiftsByDriverId(@PathVariable String driverId) {
        return ResponseEntity.ok(bookingService.getDriverShiftsByDriverId(driverId));

    }
}
