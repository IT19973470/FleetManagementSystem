package lk.fleet.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

//Gayan//
@Entity
public class ItemItemApplication {

    @EmbeddedId
    private ItemItemApplicationPK itemItemApplicationId;
    @ManyToOne
    @JoinColumn(name="itemID",referencedColumnName = "itemID",insertable = false, updatable = false,nullable = false)
    private Item item;

    @ManyToOne
    @JoinColumn(name="applicationID",referencedColumnName = "applicationID",insertable = false, updatable = false,nullable = false)
    private Application application;


    public ItemItemApplicationPK getItemItemApplicationId() {
        return itemItemApplicationId;
    }

    public void setItemItemApplicationId(ItemItemApplicationPK itemItemApplicationId) {
        this.itemItemApplicationId = itemItemApplicationId;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }
}
