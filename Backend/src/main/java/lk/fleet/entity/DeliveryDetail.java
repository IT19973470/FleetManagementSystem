package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class DeliveryDetail {

    @Id
    private String deliveryDetailId;
    private String itemName;
    private String itemType;

    @OneToOne
    private Delivery delivery;

    public String getDeliveryDetailId() {
        return deliveryDetailId;
    }

    public void setDeliveryDetailId(String deliveryDetailId) {
        this.deliveryDetailId = deliveryDetailId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemType() {
        return itemType;
    }

    public void setItemType(String itemType) {
        this.itemType = itemType;
    }

    public Delivery getDelivery() {
        return delivery;
    }

    public void setDelivery(Delivery delivery) {
        this.delivery = delivery;
    }
}
