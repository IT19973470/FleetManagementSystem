package lk.fleet.entity;

import javax.persistence.*;

@Entity
public class DriverVehicle {
    @EmbeddedId
    private DriverVehiclePK id;
    private String qty;
    private String type;

    @MapsId("driverID")
    @ManyToOne
    @JoinColumn(name = "driverID", referencedColumnName = "driverID", insertable = false, updatable = false, nullable = false)
    private Driver driver;

    @ManyToOne
    private VehicleAccident vehicleAccident;


    public DriverVehiclePK getId() {
        return id;
    }

    public void setId(DriverVehiclePK id) {
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
