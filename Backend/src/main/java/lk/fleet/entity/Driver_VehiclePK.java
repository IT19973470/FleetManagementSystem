package lk.fleet.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class Driver_VehiclePK implements Serializable {
    @Column(name = "driverID")
    private String driverID;

    @Column(name = "vehicleId")
    private String vehicleId;

    public Driver_VehiclePK(String driverID, String vehicleId) {
        this.driverID = driverID;
        this.vehicleId = vehicleId;
    }

    public Driver_VehiclePK() {

    }

    public String getDriverID() {
        return driverID;
    }

    public void setDriverID(String driverID) {
        this.driverID = driverID;
    }

    public String getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
    }
}
