package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Item_Application {
    @Id
    public String RequestID;
    public  int No_of_Items_Carrying;

    public String getRequestID() {
        return RequestID;
    }

    public void setRequestID(String requestID) {
        RequestID = requestID;
    }

    public int getNo_of_Items_Carrying() {
        return No_of_Items_Carrying;
    }

    public void setNo_of_Items_Carrying(int no_of_Items_Carrying) {
        No_of_Items_Carrying = no_of_Items_Carrying;
    }
}
