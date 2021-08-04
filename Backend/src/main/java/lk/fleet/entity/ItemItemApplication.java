package lk.fleet.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

//Gayan//
@Entity
public class ItemItemApplication {

    @EmbeddedId
    private ItemItemApplicationPk itemItemApplicationPk;
    @ManyToOne
    @JoinColumn(name="itemID",referencedColumnName = "itemID",insertable = false, updatable = false,nullable = false)
    private  Items items;

    @ManyToOne
    @JoinColumn(name="requestID",referencedColumnName = "requestID",insertable = false, updatable = false,nullable = false)
    private Application application;

    public ItemItemApplicationPk getItemItemApplicationPk() {
        return itemItemApplicationPk;
    }

    public void setItemItemApplicationPk(ItemItemApplicationPk itemItemApplicationPk) {
        this.itemItemApplicationPk = itemItemApplicationPk;
    }

    public Items getItems() {
        return items;
    }

    public void setItems(Items items) {
        this.items = items;
    }

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }
}
