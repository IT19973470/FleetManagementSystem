package lk.fleet.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
public class AccidentMaintenanceManager {

    @Id
    private String managerId;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "accidentMaintenanceManager")
    private Set<VehicleMaintenance> vehicleMaintenances;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "accidentMaintenanceManager")
    private Set<VehicleAccident> vehicleAccidents;

    @OneToOne
    private UserAccount userAccount;



    public String getManagerId() {
        return managerId;
    }

    public void setManagerId(String managerId) {
        this.managerId = managerId;
    }


}
