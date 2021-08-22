package lk.fleet.dto;

import lk.fleet.entity.Delivery;

import java.time.format.DateTimeFormatter;
import java.util.List;

public class DeliveryDTO {

    private String deliveryId;
    private String placeFrom;
    private String companyName;
    private String deliveryDate;
    private String deliveryTime;
    private String deliveryTimeActual;
    private String contactNumber;
    private String deliveryPersonNic;
    private String deliveryPersonName;
    private boolean deliveryStatus;

    private List<DeliveryItemDetailDTO> deliveryItemDetails;
    private List<DeliveryPassengerDetailDTO> deliveryPassengerDetails;

    public DeliveryDTO(Delivery delivery) {
        if (delivery != null) {
            this.deliveryId = delivery.getDeliveryId();
            this.placeFrom = delivery.getPlaceFrom();
            this.companyName = delivery.getCompanyName();
            this.deliveryDate = delivery.getDeliveryDateTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            this.deliveryTime = delivery.getDeliveryDateTime().format(DateTimeFormatter.ofPattern("hh:mm a"));
            this.deliveryTimeActual = delivery.getDeliveryDateTime().format(DateTimeFormatter.ofPattern("HH:mm"));
            this.contactNumber = delivery.getContactNumber();
            this.deliveryPersonNic = delivery.getDeliveryPersonNic();
            this.deliveryPersonName = delivery.getDeliveryPersonName();
            this.deliveryStatus = delivery.isDeliveryStatus();
        }
    }

    public String getDeliveryId() {
        return deliveryId;
    }

    public void setDeliveryId(String deliveryId) {
        this.deliveryId = deliveryId;
    }

    public String getPlaceFrom() {
        return placeFrom;
    }

    public void setPlaceFrom(String placeFrom) {
        this.placeFrom = placeFrom;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(String deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    public String getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(String deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getDeliveryPersonNic() {
        return deliveryPersonNic;
    }

    public void setDeliveryPersonNic(String deliveryPersonNic) {
        this.deliveryPersonNic = deliveryPersonNic;
    }

    public String getDeliveryPersonName() {
        return deliveryPersonName;
    }

    public void setDeliveryPersonName(String deliveryPersonName) {
        this.deliveryPersonName = deliveryPersonName;
    }

    public boolean isDeliveryStatus() {
        return deliveryStatus;
    }

    public void setDeliveryStatus(boolean deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
    }

    public String getDeliveryTimeActual() {
        return deliveryTimeActual;
    }

    public void setDeliveryTimeActual(String deliveryTimeActual) {
        this.deliveryTimeActual = deliveryTimeActual;
    }

    public List<DeliveryItemDetailDTO> getDeliveryItemDetails() {
        return deliveryItemDetails;
    }

    public void setDeliveryItemDetails(List<DeliveryItemDetailDTO> deliveryItemDetails) {
        this.deliveryItemDetails = deliveryItemDetails;
    }

    public List<DeliveryPassengerDetailDTO> getDeliveryPassengerDetails() {
        return deliveryPassengerDetails;
    }

    public void setDeliveryPassengerDetails(List<DeliveryPassengerDetailDTO> deliveryPassengerDetails) {
        this.deliveryPassengerDetails = deliveryPassengerDetails;
    }
}
