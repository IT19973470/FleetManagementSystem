package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ItemApplication {
    @Id
    public String requestID;
    public  int noOfItems;

    public String getRequestID() {
        return requestID;
    }

    public void setRequestID(String requestID) {
        this.requestID = requestID;
    }

    public int getNoOfItems() {
        return noOfItems;
    }

    public void setNoOfItems(int noOfItems) {
        this.noOfItems = noOfItems;
    }
}
