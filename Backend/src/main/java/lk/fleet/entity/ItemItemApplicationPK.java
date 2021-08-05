package lk.fleet.entity;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import java.io.Serializable;

//Gayan//
@Embeddable
public class ItemItemApplicationPK implements Serializable {

    private String itemID;
    private String requestID;

    public ItemItemApplicationPK(String itemID, String requestID) {
        this.itemID = itemID;
        this.requestID = requestID;
    }

    public ItemItemApplicationPK() {

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
