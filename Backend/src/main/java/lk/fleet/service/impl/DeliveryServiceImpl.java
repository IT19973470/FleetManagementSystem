package lk.fleet.service.impl;

import lk.fleet.dto.DeliveryDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Delivery;
import lk.fleet.service.DeliveryService;
import org.springframework.stereotype.Service;

@Service
public class DeliveryServiceImpl implements DeliveryService {
    @Override
    public DeliveryDTO addDelivery(Delivery delivery) {
        return null;
    }

    @Override
    public DeliveryDTO updateDelivery(String deliveryId, Booking booking) {
        return null;
    }

    @Override
    public boolean deleteDelivery(String deliveryId) {
        return false;
    }
}
