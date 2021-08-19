package lk.fleet.service.impl;

import lk.fleet.dto.DeliveryDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Delivery;
import lk.fleet.entity.DeliveryItemDetail;
import lk.fleet.repository.DeliveryItemDetailRepository;
import lk.fleet.repository.DeliveryRepository;
import lk.fleet.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class DeliveryServiceImpl implements DeliveryService {

    @Autowired
    private DeliveryRepository deliveryRepository;
    @Autowired
    private DeliveryItemDetailRepository deliveryItemDetailRepository;

    @Override
    public DeliveryDTO addItemDelivery(Delivery delivery) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        delivery.setDeliveryId("Del" + dateTime);
        int count = 0;
        for (DeliveryItemDetail deliveryItemDetail : delivery.getDeliveryItemDetails()) {
            deliveryItemDetail.setDeliveryDetailId("DelIt" + ++count + dateTime);
            deliveryItemDetail.setDelivery(delivery);
        }
        deliveryRepository.save(delivery);
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
