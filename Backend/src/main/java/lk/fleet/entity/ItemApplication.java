package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

//Gayan//
@Entity
public class ItemApplication {
    @Id
    private String itemApplicationId;
    private  int noOfItems;

    @OneToOne
    private Application application;

    public String getItemApplicationId() {
        return itemApplicationId;
    }

    public void setItemApplicationId(String itemApplicationId) {
        this.itemApplicationId = itemApplicationId;
    }

    public int getNoOfItems() {
        return noOfItems;
    }

    public void setNoOfItems(int noOfItems) {
        this.noOfItems = noOfItems;
    }

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }
}
