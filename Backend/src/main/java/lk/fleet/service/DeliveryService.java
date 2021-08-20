package lk.fleet.service;

import lk.fleet.dto.DeliveryDTO;
import lk.fleet.dto.DeliveryItemDetailDTO;
import lk.fleet.entity.Delivery;
import lk.fleet.entity.DeliveryItemDetail;

import java.util.List;

public interface DeliveryService {

    DeliveryDTO addItemDelivery(Delivery delivery);

    DeliveryDTO updateDelivery(String deliveryId, Delivery delivery);

    boolean deleteDelivery(String deliveryId);

    List<DeliveryDTO> getAllItemDeliveries();

    List<DeliveryDTO> getAllPassengerDeliveries();

    DeliveryItemDetailDTO addItemToDelivery(DeliveryItemDetail deliveryItemDetail);

    DeliveryItemDetailDTO updateItemOnDelivery(String deliveryItemId, DeliveryItemDetail deliveryItemDetail);

    boolean deleteItemOnDelivery(String deliveryItemId);

}
