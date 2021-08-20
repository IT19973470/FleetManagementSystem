package lk.fleet.service;

import lk.fleet.dto.DeliveryDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Delivery;

import java.util.List;

public interface DeliveryService {

    DeliveryDTO addItemDelivery(Delivery delivery);

    DeliveryDTO updateDelivery(String deliveryId, Delivery delivery);

    boolean deleteDelivery(String deliveryId);

    List<DeliveryDTO> getAllItemDeliveries();

    List<DeliveryDTO> getAllPassengerDeliveries();
}
