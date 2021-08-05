package lk.fleet.entity;

import javax.persistence.*;

@Entity
public class DriverVehicle {
    @EmbeddedId
    private DriverVehiclePK driverVehicleID;
    private String qty;
    private String type;

    @ManyToOne
    @JoinColumn(name = "driverID", referencedColumnName = "driverID", insertable = false, updatable = false, nullable = false)
    private Driver driver;




    public DriverVehiclePK getDriverVehicleID() {
        return driverVehicleID;
    }

    public void setDriverVehicleID(DriverVehiclePK driverVehicleID) {
        this.driverVehicleID = driverVehicleID;
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
