package lk.fleet.service.impl;

import lk.fleet.dto.DeliveryDTO;
import lk.fleet.dto.DeliveryItemDetailDTO;
import lk.fleet.dto.DeliveryPassengerDetailDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Delivery;
import lk.fleet.entity.DeliveryItemDetail;
import lk.fleet.entity.DeliveryPassengerDetail;
import lk.fleet.repository.DeliveryItemDetailRepository;
import lk.fleet.repository.DeliveryPassengerDetailRepository;
import lk.fleet.repository.DeliveryRepository;
import lk.fleet.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
public class DeliveryServiceImpl implements DeliveryService {

    @Autowired
    private DeliveryRepository deliveryRepository;
    @Autowired
    private DeliveryItemDetailRepository deliveryItemDetailRepository;
    @Autowired
    private DeliveryPassengerDetailRepository deliveryPassengerDetailRepository;

    @Override
    public DeliveryDTO addItemDelivery(Delivery delivery) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        delivery.setDeliveryId("IDel" + dateTime);
        delivery.setDeliveryType("Item");
        int count = 0;
        for (DeliveryItemDetail deliveryItemDetail : delivery.getDeliveryItemDetails()) {
            deliveryItemDetail.setItemDetailId("DelIt" + ++count + dateTime);
            deliveryItemDetail.setDelivery(delivery);
        }
        return new DeliveryDTO(deliveryRepository.save(delivery));
    }

    @Override
    public DeliveryDTO addPassengerDelivery(Delivery delivery) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        delivery.setDeliveryId("PDel" + dateTime);
        delivery.setDeliveryType("Passenger");
        int count = 0;
        for (DeliveryPassengerDetail deliveryPassengerDetail : delivery.getDeliveryPassengerDetails()) {
            deliveryPassengerDetail.setPassengerDetailId("DelPa" + ++count + dateTime);
            deliveryPassengerDetail.setDelivery(delivery);
        }
        return new DeliveryDTO(deliveryRepository.save(delivery));
    }

    @Override
    public DeliveryDTO addPassengerItemDelivery(Delivery delivery) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        delivery.setDeliveryId("PIDel" + dateTime);
        delivery.setDeliveryType("PassengerItem");
        int countItem = 0, countPassenger = 0;
        for (DeliveryPassengerDetail deliveryPassengerDetail : delivery.getDeliveryPassengerDetails()) {
            deliveryPassengerDetail.setPassengerDetailId("DelPa" + ++countPassenger + dateTime);
            deliveryPassengerDetail.setDelivery(delivery);
        }
        for (DeliveryItemDetail deliveryItemDetail : delivery.getDeliveryItemDetails()) {
            deliveryItemDetail.setItemDetailId("DelIt" + ++countItem + dateTime);
            deliveryItemDetail.setDelivery(delivery);
        }
        return new DeliveryDTO(deliveryRepository.save(delivery));
    }

    @Override
    public DeliveryDTO updateDelivery(String deliveryId, Delivery delivery) {
        Optional<Delivery> optionalDelivery = deliveryRepository.findById(deliveryId);
        if (optionalDelivery.isPresent()) {
            Delivery deliveryObj = optionalDelivery.get();
            deliveryObj.setDeliveryPersonName(delivery.getDeliveryPersonName());
            deliveryObj.setDeliveryPersonNic(delivery.getDeliveryPersonNic());
            deliveryObj.setContactNumber(delivery.getContactNumber());
            deliveryObj.setAddress(delivery.getAddress());
            deliveryObj.setCompanyName(delivery.getCompanyName());
            deliveryObj.setDeliveryDateTime(delivery.getDeliveryDateTime());
            deliveryObj.setVehicleNumber(delivery.getVehicleNumber());
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
    public DeliveryPassengerDetailDTO addPassengerToDelivery(DeliveryPassengerDetail deliveryPassengerDetail) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        deliveryPassengerDetail.setPassengerDetailId("DelPa" + 0 + dateTime);
        return new DeliveryPassengerDetailDTO(deliveryPassengerDetailRepository.save(deliveryPassengerDetail));
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
    public DeliveryPassengerDetailDTO updatePassengerOnDelivery(String deliveryPassengerId, DeliveryPassengerDetail deliveryPassengerDetail) {
        Optional<DeliveryPassengerDetail> optionalDeliveryPassengerDetail = deliveryPassengerDetailRepository.findById(deliveryPassengerId);
        if (optionalDeliveryPassengerDetail.isPresent()) {
            DeliveryPassengerDetail deliveryPassengerDetailObj = optionalDeliveryPassengerDetail.get();
            deliveryPassengerDetailObj.setPassengerName(deliveryPassengerDetail.getPassengerName());
            deliveryPassengerDetailObj.setPassengerNic(deliveryPassengerDetail.getPassengerNic());
            deliveryPassengerDetailObj.setContactNumber(deliveryPassengerDetail.getContactNumber());
            deliveryPassengerDetailObj.setPassengerType(deliveryPassengerDetail.getPassengerType());
            return new DeliveryPassengerDetailDTO(deliveryPassengerDetailRepository.save(deliveryPassengerDetailObj));
        }
        return null;
    }

    @Override
    public boolean deleteItemOnDelivery(String deliveryItemId) {
        deliveryItemDetailRepository.deleteById(deliveryItemId);
        return true;
    }

    @Override
    public boolean deletePassengerOnDelivery(String deliveryPassengerId) {
        deliveryPassengerDetailRepository.deleteById(deliveryPassengerId);
        return true;
    }

    @Override
    public List<DeliveryDTO> getAllDeliveries(String deliveryType) {
        List<Delivery> deliveries = deliveryRepository.getAllDeliveriesDesc(deliveryType);
        return setDeliveryDTOs(deliveries, deliveryType);
    }

    @Override
    public List<DeliveryDTO> getAllDeliveriesByDate(String deliveryType, String date) {
        try {
            List<Delivery> deliveries = deliveryRepository.getAllDeliveriesByDate(deliveryType, new SimpleDateFormat("yyyy-MM-dd").parse(date));
            return setDeliveryDTOs(deliveries, deliveryType);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<DeliveryDTO> getAllDeliveriesByCompany(String deliveryType, String company) {
        List<Delivery> deliveries = deliveryRepository.getAllDeliveriesByCompany(deliveryType, company);
        return setDeliveryDTOs(deliveries, deliveryType);
    }

    private List<DeliveryDTO> setDeliveryDTOs(List<Delivery> deliveries, String deliveryType) {
        List<DeliveryDTO> deliveryDTOS = new ArrayList<>();
        for (Delivery delivery : deliveries) {
            DeliveryDTO deliveryDTO = new DeliveryDTO(delivery);
            if (deliveryType.equals("Item")) {
                List<DeliveryItemDetailDTO> deliveryItemDetailDTOS = new ArrayList<>();
                for (DeliveryItemDetail deliveryItemDetail : delivery.getDeliveryItemDetails()) {
                    deliveryItemDetailDTOS.add(new DeliveryItemDetailDTO(deliveryItemDetail));
                }
                deliveryDTO.setDeliveryItemDetails(deliveryItemDetailDTOS);
                deliveryDTOS.add(deliveryDTO);
            } else if (deliveryType.equals("Passenger")) {
                List<DeliveryPassengerDetailDTO> deliveryPassengerDetailDTOS = new ArrayList<>();
                for (DeliveryPassengerDetail deliveryPassengerDetail : delivery.getDeliveryPassengerDetails()) {
                    deliveryPassengerDetailDTOS.add(new DeliveryPassengerDetailDTO(deliveryPassengerDetail));
                }
                deliveryDTO.setDeliveryPassengerDetails(deliveryPassengerDetailDTOS);
                deliveryDTOS.add(deliveryDTO);
            } else if (deliveryType.equals("PassengerItem")) {
                List<DeliveryPassengerDetailDTO> deliveryPassengerDetailDTOS = new ArrayList<>();
                List<DeliveryItemDetailDTO> deliveryItemDetailDTOS = new ArrayList<>();
                for (DeliveryPassengerDetail deliveryPassengerDetail : delivery.getDeliveryPassengerDetails()) {
                    deliveryPassengerDetailDTOS.add(new DeliveryPassengerDetailDTO(deliveryPassengerDetail));
                }
                deliveryDTO.setDeliveryPassengerDetails(deliveryPassengerDetailDTOS);
                for (DeliveryItemDetail deliveryItemDetail : delivery.getDeliveryItemDetails()) {
                    deliveryItemDetailDTOS.add(new DeliveryItemDetailDTO(deliveryItemDetail));
                }
                deliveryDTO.setDeliveryItemDetails(deliveryItemDetailDTOS);
                deliveryDTOS.add(deliveryDTO);
            }
        }

        return deliveryDTOS;
    }
}
