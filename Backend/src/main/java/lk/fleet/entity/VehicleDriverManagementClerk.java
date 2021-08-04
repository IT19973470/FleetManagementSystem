package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class VehicleDriverManagementClerk {

    @Id
    private String vehicleDriverManagementId;

    public String getVehicleDriverManagementId() {
        return vehicleDriverManagementId;
    }

    public void setVehicleDriverManagementId(String vehicleDriverManagementId) {
        this.vehicleDriverManagementId = vehicleDriverManagementId;
    }
}
