package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Vehicle {

    @Id
    private String vehicleId;
    private String vehicleType;
    private String model;
    private int noOfSeats;
    private double initialMpg;
    private double serviceMpg;
    private String fuelType;
    private boolean occupied;

    public String getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getNoOfSeats() {
        return noOfSeats;
    }

    public void setNoOfSeats(int noOfSeats) {
        this.noOfSeats = noOfSeats;
    }

    public double getInitialMpg() {
        return initialMpg;
    }

    public void setInitialMpg(double initialMpg) {
        this.initialMpg = initialMpg;
    }

    public double getServiceMpg() {
        return serviceMpg;
    }

    public void setServiceMpg(double serviceMpg) {
        this.serviceMpg = serviceMpg;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public boolean isOccupied() {
        return occupied;
    }

    public void setOccupied(boolean occupied) {
        this.occupied = occupied;
    }
}
