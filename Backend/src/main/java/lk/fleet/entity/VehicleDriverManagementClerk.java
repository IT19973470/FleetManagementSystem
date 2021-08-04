package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class VehicleDriverManagementClerk {

    @Id
    private String vehicleDriverManagementId;

    @OneToOne
    private UserAccount userAccount;

    public String getVehicleDriverManagementId() {
        return vehicleDriverManagementId;
    }

    public void setVehicleDriverManagementId(String vehicleDriverManagementId) {
        this.vehicleDriverManagementId = vehicleDriverManagementId;
    }
}
