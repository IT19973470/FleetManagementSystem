package lk.fleet.entity;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import java.io.Serializable;

//Gayan//
@Embeddable
public class ItemItemApplicationId implements Serializable {

    private String itemID;
    private String requestID;

    public ItemItemApplicationId(String itemID, String requestID) {
        this.itemID = itemID;
        this.requestID = requestID;
    }

    public ItemItemApplicationId() {

    }

    public String getItemID() {
        return itemID;
    }

    public void setItemID(String itemID) {
        this.itemID = itemID;
    }

    public String getRequestID() {
        return requestID;
    }

    public void setRequestID(String requestID) {
        this.requestID = requestID;
    }
}
