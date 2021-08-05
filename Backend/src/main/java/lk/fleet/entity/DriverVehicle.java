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

    @ManyToOne
    private VehicleAccident vehicleAccident;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Shift shift;

    public Shift getShift() {
        return shift;
    }

    public void setShift(Shift shift) {
        this.shift = shift;
    }

    public DriverVehiclePK getDriverVehicleID() {
        return driverVehicleID;
    }

    public void setDriverVehicleID(DriverVehiclePK driverVehicleID) {
        this.driverVehicleID = driverVehicleID;
    }

    public VehicleAccident getVehicleAccident() {
        return vehicleAccident;
    }

    public void setVehicleAccident(VehicleAccident vehicleAccident) {
        this.vehicleAccident = vehicleAccident;
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
