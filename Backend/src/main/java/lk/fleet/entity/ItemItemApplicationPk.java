package lk.fleet.entity;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import java.io.Serializable;

//Gayan//
@Embeddable
public class ItemItemApplicationPk implements Serializable {

    private String itemID;
    private String requestID;

    public ItemItemApplicationPk(String itemID, String requestID) {
        this.itemID = itemID;
        this.requestID = requestID;
    }

    public ItemItemApplicationPk() {

    }
}
