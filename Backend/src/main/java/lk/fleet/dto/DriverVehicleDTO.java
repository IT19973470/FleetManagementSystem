package lk.fleet.dto;

import lk.fleet.entity.Driver;
import lk.fleet.entity.DriverVehicle;
import lk.fleet.entity.DriverVehiclePK;
import lk.fleet.entity.Vehicle;

public class DriverVehicleDTO {
    private DriverVehiclePK driverVehicleID;
    private String qty;
    private String type;
    private Driver driver;
    private Vehicle vehicle;

    public DriverVehicleDTO(DriverVehicle driverVehicle){
        if(driverVehicle!=null){
            this.driverVehicleID=driverVehicle.getDriverVehicleID();
            this.qty=driverVehicle.getQty();
            this.type=driverVehicle.getType();
            this.driver=driverVehicle.getDriver();
            this.vehicle=driverVehicle.getVehicle();
        }
    }

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }


}
