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
}
