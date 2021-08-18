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
    @JoinColumn(name="itemApplicationId",referencedColumnName = "itemApplicationId",insertable = false, updatable = false,nullable = false)
    private ItemApplication application;


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

    public ItemApplication getApplication() {
        return application;
    }

    public void setApplication(ItemApplication application) {
        this.application = application;
    }
}
