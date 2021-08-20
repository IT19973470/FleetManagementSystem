package lk.fleet.service;

import lk.fleet.dto.DeliveryDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Delivery;

public interface DeliveryService {

    DeliveryDTO addItemDelivery(Delivery delivery);

    DeliveryDTO updateDelivery(String deliveryId, Booking booking);

    boolean deleteDelivery(String deliveryId);
}
