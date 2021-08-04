package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Vehicle {

    @Id
    private String vehicleId;
    private String vType;
    private int noOfSeats;
    private int mpg;
    private String fType;

    public String getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getvType() {
        return vType;
    }

    public void setvType(String vType) {
        this.vType = vType;
    }

    public int getNoOfSeats() {
        return noOfSeats;
    }

    public void setNoOfSeats(int noOfSeats) {
        this.noOfSeats = noOfSeats;
    }

    public int getMpg() {
        return mpg;
    }

    public void setMpg(int mpg) {
        this.mpg = mpg;
    }

    public String getfType() {
        return fType;
    }

    public void setfType(String fType) {
        this.fType = fType;
    }



}
