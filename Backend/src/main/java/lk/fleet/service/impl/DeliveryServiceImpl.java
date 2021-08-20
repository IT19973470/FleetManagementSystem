package lk.fleet.service.impl;

import lk.fleet.dto.DeliveryDTO;
import lk.fleet.dto.DeliveryItemDetailDTO;
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
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
            deliveryItemDetail.setItemDetailId("DelIt" + ++count + dateTime);
            deliveryItemDetail.setDelivery(delivery);
        }
        deliveryRepository.save(delivery);
        return null;
    }

    @Override
    public DeliveryDTO updateDelivery(String deliveryId, Delivery delivery) {
        Optional<Delivery> optionalDelivery = deliveryRepository.findById(deliveryId);
        if (optionalDelivery.isPresent()) {
            Delivery deliveryObj = optionalDelivery.get();
            deliveryObj.setDeliveryPersonName(delivery.getDeliveryPersonName());
            deliveryObj.setDeliveryPersonNic(delivery.getDeliveryPersonNic());
            deliveryObj.setContactNumber(delivery.getContactNumber());
            deliveryObj.setPlaceFrom(delivery.getPlaceFrom());
            deliveryObj.setCompanyName(delivery.getCompanyName());
            deliveryObj.setDeliveryDateTime(delivery.getDeliveryDateTime());
            return new DeliveryDTO(deliveryRepository.save(deliveryObj));
        }
        return null;
    }

    @Override
    public boolean deleteDelivery(String deliveryId) {
        deliveryRepository.deleteById(deliveryId);
        return true;
    }

    @Override
    public DeliveryItemDetailDTO addItemToDelivery(DeliveryItemDetail deliveryItemDetail) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        deliveryItemDetail.setItemDetailId("DelIt" + 0 + dateTime);
        return new DeliveryItemDetailDTO(deliveryItemDetailRepository.save(deliveryItemDetail));
    }

    @Override
    public DeliveryItemDetailDTO updateItemOnDelivery(String deliveryItemId, DeliveryItemDetail deliveryItemDetail) {
        Optional<DeliveryItemDetail> optionalDeliveryItemDetail = deliveryItemDetailRepository.findById(deliveryItemId);
        if (optionalDeliveryItemDetail.isPresent()) {
            DeliveryItemDetail deliveryItemDetailObj = optionalDeliveryItemDetail.get();
            deliveryItemDetailObj.setItemName(deliveryItemDetail.getItemName());
            deliveryItemDetailObj.setItemType(deliveryItemDetail.getItemType());
            deliveryItemDetailObj.setItemQty(deliveryItemDetail.getItemQty());
            return new DeliveryItemDetailDTO(deliveryItemDetailRepository.save(deliveryItemDetailObj));
        }
        return null;
    }

    @Override
    public boolean deleteItemOnDelivery(String deliveryItemId) {
        deliveryItemDetailRepository.deleteById(deliveryItemId);
        return true;
    }

    @Override
    public List<DeliveryDTO> getAllItemDeliveries() {
        List<Delivery> deliveries = deliveryRepository.getAllDeliveriesDesc();
        List<DeliveryDTO> deliveryDTOS = new ArrayList<>();
        for (Delivery delivery : deliveries) {
            List<DeliveryItemDetailDTO> deliveryItemDetailDTOS = new ArrayList<>();
            for (DeliveryItemDetail deliveryItemDetail : delivery.getDeliveryItemDetails()) {
                deliveryItemDetailDTOS.add(new DeliveryItemDetailDTO(deliveryItemDetail));
            }
            deliveryDTOS.add(new DeliveryDTO(delivery, deliveryItemDetailDTOS));
        }

        return deliveryDTOS;
    }

    @Override
    public List<DeliveryDTO> getAllPassengerDeliveries() {
        return null;
    }
}
