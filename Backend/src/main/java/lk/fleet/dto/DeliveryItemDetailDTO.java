package lk.fleet.dto;

import lk.fleet.entity.DeliveryItemDetail;

public class DeliveryItemDetailDTO {

    private String deliveryDetailId;
    private String itemName;
    private String itemType;
    private int itemQty;

    public DeliveryItemDetailDTO(DeliveryItemDetail deliveryItemDetail) {
        if (deliveryItemDetail != null) {
            this.deliveryDetailId = deliveryItemDetail.getDeliveryDetailId();
            this.itemName = deliveryItemDetail.getItemName();
            this.itemType = deliveryItemDetail.getItemType();
            this.itemQty = deliveryItemDetail.getItemQty();
        }
    }

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

    public int getItemQty() {
        return itemQty;
    }

    public void setItemQty(int itemQty) {
        this.itemQty = itemQty;
    }
}
