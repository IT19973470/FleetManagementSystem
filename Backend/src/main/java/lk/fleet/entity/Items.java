package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Items {
    @Id
    public String itemID;
    public  String itemName;
    public  int qty;

    public String getItemID() {
        return itemID;
    }

    public void setItemID(String itemID) {
        this.itemID = itemID;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }
}
