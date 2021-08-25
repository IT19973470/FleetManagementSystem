package lk.fleet.controller;

import lk.fleet.entity.Booking;
import lk.fleet.entity.Delivery;
import lk.fleet.entity.DeliveryItemDetail;
import lk.fleet.entity.DeliveryPassengerDetail;
import lk.fleet.service.BookingService;
import lk.fleet.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "delivery")
public class DeliveryController {

    @Autowired
    private DeliveryService deliveryService;

    @PostMapping(value = "/addItemDelivery")
    public ResponseEntity addItemDelivery(@RequestBody Delivery delivery) {
        return ResponseEntity.ok(deliveryService.addItemDelivery(delivery));
    }

    @PostMapping(value = "/addPassengerDelivery")
    public ResponseEntity addPassengerDelivery(@RequestBody Delivery delivery) {
        return ResponseEntity.ok(deliveryService.addPassengerDelivery(delivery));
    }

    @PutMapping(value = "/updateDelivery/{deliveryId}")
    public ResponseEntity updateDelivery(@PathVariable String deliveryId, @RequestBody Delivery delivery) {
        return ResponseEntity.ok(deliveryService.updateDelivery(deliveryId, delivery));
    }

    @DeleteMapping(value = "/deleteDelivery/{deliveryId}")
    public ResponseEntity deleteDelivery(@PathVariable String deliveryId) {
        return ResponseEntity.ok(deliveryService.deleteDelivery(deliveryId));
    }

    @PostMapping(value = "/addItemToDelivery")
    public ResponseEntity addItemToDelivery(@RequestBody DeliveryItemDetail deliveryItemDetail) {
        return ResponseEntity.ok(deliveryService.addItemToDelivery(deliveryItemDetail));
    }

    @PostMapping(value = "/addPassengerToDelivery")
    public ResponseEntity addPassengerToDelivery(@RequestBody DeliveryPassengerDetail deliveryPassengerDetail) {
        return ResponseEntity.ok(deliveryService.addPassengerToDelivery(deliveryPassengerDetail));
    }

    @PutMapping(value = "/updateItemOnDelivery/{deliveryItemId}")
    public ResponseEntity updateItemOnDelivery(@PathVariable String deliveryItemId, @RequestBody DeliveryItemDetail deliveryItemDetail) {
        return ResponseEntity.ok(deliveryService.updateItemOnDelivery(deliveryItemId, deliveryItemDetail));
    }

    @PutMapping(value = "/updatePassengerOnDelivery/{deliveryPassengerId}")
    public ResponseEntity updatePassengerOnDelivery(@PathVariable String deliveryPassengerId, @RequestBody DeliveryPassengerDetail deliveryPassengerDetail) {
        return ResponseEntity.ok(deliveryService.updatePassengerOnDelivery(deliveryPassengerId, deliveryPassengerDetail));
    }

    @DeleteMapping(value = "/deleteItemOnDelivery/{deliveryItemId}")
    public ResponseEntity deleteItemOnDelivery(@PathVariable String deliveryItemId) {
        return ResponseEntity.ok(deliveryService.deleteItemOnDelivery(deliveryItemId));
    }

    @DeleteMapping(value = "/deletePassengerOnDelivery/{deliveryPassengerId}")
    public ResponseEntity deletePassengerOnDelivery(@PathVariable String deliveryPassengerId) {
        return ResponseEntity.ok(deliveryService.deletePassengerOnDelivery(deliveryPassengerId));
    }

    @GetMapping(value = "/getAllDeliveries/{deliveryType}")
    public ResponseEntity getAllDeliveries(@PathVariable String deliveryType) {
        return ResponseEntity.ok(deliveryService.getAllDeliveries(deliveryType));
    }

    @GetMapping(value = "/getAllDeliveriesByDate/{deliveryType}/{date}")
    public ResponseEntity getAllDeliveriesByDate(@PathVariable String deliveryType, @PathVariable String date) {
        return ResponseEntity.ok(deliveryService.getAllDeliveriesByDate(deliveryType, date));
    }

    @GetMapping(value = "/getAllDeliveriesByCompany/{deliveryType}/{company}")
    public ResponseEntity getAllDeliveriesByCompany(@PathVariable String deliveryType, @PathVariable String company) {
        return ResponseEntity.ok(deliveryService.getAllDeliveriesByCompany(deliveryType, company));
    }

}
