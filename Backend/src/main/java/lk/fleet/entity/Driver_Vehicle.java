package lk.fleet.entity;

import javax.persistence.*;

@Entity
public class Driver_Vehicle {
    @EmbeddedId
    private Driver_VehiclePK id;
    private String qty;
    private String type;

    @MapsId("driverID")
    @ManyToOne
    @JoinColumn(name = "driverID", referencedColumnName = "driverID", insertable = false, updatable = false, nullable = false)
    private Driver driver;

    public Driver_VehiclePK getId() {
        return id;
    }

    public void setId(Driver_VehiclePK id) {
        this.id = id;
    }

    public String getQty() {
        return qty;
    }

    public void setQty(String qty) {
        this.qty = qty;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
