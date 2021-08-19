package lk.fleet.controller;

import lk.fleet.entity.Booking;
import lk.fleet.entity.Delivery;
import lk.fleet.service.BookingService;
import lk.fleet.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "userAccount")
public class DeliveryController {

    @Autowired
    private DeliveryService deliveryService;

    @PostMapping(value = "/addDelivery")
    public ResponseEntity addDelivery(@RequestBody Delivery delivery){
        return ResponseEntity.ok(deliveryService.addDelivery(delivery));
    }

    @PutMapping(value = "/updateDelivery/{deliveryId}")
    public ResponseEntity updateDelivery(@PathVariable String deliveryId, @RequestBody Booking booking){
        return ResponseEntity.ok(deliveryService.updateDelivery(deliveryId, booking));
    }

    @DeleteMapping(value = "/deleteDelivery/{deliveryId}")
    public ResponseEntity deleteDelivery(@PathVariable String deliveryId){
        return ResponseEntity.ok(deliveryService.deleteDelivery(deliveryId));
    }
}
