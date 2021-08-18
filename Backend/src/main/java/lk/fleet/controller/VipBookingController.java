package lk.fleet.controller;

import lk.fleet.entity.UserAccount;
import lk.fleet.entity.VipBooking;
import lk.fleet.service.UserAccountService;
import lk.fleet.service.VipBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "userAccount")
public class VipBookingController {

    @Autowired
    private VipBookingService vipBookingService;

    @PostMapping(value = "/addVipBooking")
    public ResponseEntity addVipBooking(@RequestBody VipBooking vipBooking){
        return ResponseEntity.ok(vipBookingService.addVipBooking(vipBooking));
    }

    @PutMapping(value = "/updateVipBooking/{vipBookingId}")
    public ResponseEntity updateVipBooking(@PathVariable String vipBookingId, @RequestBody VipBooking vipBooking){
        return ResponseEntity.ok(vipBookingService.updateVipBooking(vipBookingId, vipBooking));
    }
}
