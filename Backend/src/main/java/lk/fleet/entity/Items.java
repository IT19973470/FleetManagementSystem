package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Items {
    @Id
    public String ItemID;
    public  String ItemName;
    public  int Qty;

    public String getItemID() {
        return ItemID;
    }

    public void setItemID(String itemID) {
        ItemID = itemID;
    }

    public String getItemName() {
        return ItemName;
    }

    public void setItemName(String itemName) {
        ItemName = itemName;
    }

    public int getQty() {
        return Qty;
    }

    public void setQty(int qty) {
        Qty = qty;
    }
}
