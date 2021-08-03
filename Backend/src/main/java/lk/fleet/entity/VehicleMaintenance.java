package lk.fleet.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class VehicleMaintenance {

    @Id
    private String maintenanceID;
    private String maintenanceStatus;
    private String maintenanceReason;
    private LocalDate maintenanceDate;


    public String getMaintenanceID() {

        return maintenanceID;
    }

    public void setMaintenanceID(String maintenanceID) {

        this.maintenanceID = maintenanceID;
    }

    public String getMaintenanceReason() {

        return maintenanceReason;
    }

    public void setMaintenanceReason(String maintenanceReason) {

        this.maintenanceReason = maintenanceReason;
    }

    public String getMaintenanceStatus() {
        return maintenanceStatus;
    }

    public void setMaintenanceStatus(String maintenanceStatus) {
        this.maintenanceStatus = maintenanceStatus;
    }

    public LocalDate getMaintenanceDate() {
        return maintenanceDate;
    }

    public void setMaintenanceDate(LocalDate maintenanceDate) {
        this.maintenanceDate = maintenanceDate;
    }
}