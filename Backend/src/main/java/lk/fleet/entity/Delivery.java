package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
public class Delivery {

    @Id
    private String deliveryId;
    private String placeFrom;
    private String companyName;
    private LocalDateTime deliveryDateTime;
    private String contactNumber;
    private String deliveryPersonNic;
    private String deliveryPersonName;
    private boolean deliveryStatus;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "delivery")
    private Set<DeliveryItemDetail> deliveryItemDetails;

    @ManyToOne
    private SecurityOfficer securityOfficer;

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

    public LocalDateTime getDeliveryDateTime() {
        return deliveryDateTime;
    }

    public void setDeliveryDateTime(LocalDateTime deliveryDateTime) {
        this.deliveryDateTime = deliveryDateTime;
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

    public SecurityOfficer getSecurityOfficer() {
        return securityOfficer;
    }

    public void setSecurityOfficer(SecurityOfficer securityOfficer) {
        this.securityOfficer = securityOfficer;
    }

    public boolean isDeliveryStatus() {
        return deliveryStatus;
    }

    public void setDeliveryStatus(boolean deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
    }

    public Set<DeliveryItemDetail> getDeliveryItemDetails() {
        return deliveryItemDetails;
    }

    public void setDeliveryItemDetails(Set<DeliveryItemDetail> deliveryItemDetails) {
        this.deliveryItemDetails = deliveryItemDetails;
    }
}
