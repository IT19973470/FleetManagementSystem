package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
public class VehicleAccident {

  @Id
  private String vehicleAccidentID;
  private LocalDateTime accidentDate,accidentTime;
  private String insuranceNo;


    @ManyToOne
    private AccidentMaintenanceManager accidentMaintenanceManager;

    @ManyToOne
    private DriverVehicle driverVehicle;


    public String getVehicleAccidentID() {
        return vehicleAccidentID;
    }

    public void setVehicleAccidentID(String vehicleAccidentID) {
        this.vehicleAccidentID = vehicleAccidentID;
    }

    public LocalDateTime getAccidentDate() {
        return accidentDate;
    }

    public void setAccidentDate(LocalDateTime accidentDate) {
        this.accidentDate = accidentDate;
    }

    public LocalDateTime getAccidentTime() {
        return accidentTime;
    }

    public void setAccidentTime(LocalDateTime accidentTime) {
        this.accidentTime = accidentTime;
    }

    public String getInsuranceNo() {
        return insuranceNo;
    }

    public void setInsuranceNo(String insuranceNo) {
        this.insuranceNo = insuranceNo;
    }

    public AccidentMaintenanceManager getAccidentMaintenanceManager() {
        return accidentMaintenanceManager;
    }

    public void setAccidentMaintenanceManager(AccidentMaintenanceManager accidentMaintenanceManager) {
        this.accidentMaintenanceManager = accidentMaintenanceManager;
    }

    public DriverVehicle getDriverVehicle() {
        return driverVehicle;
    }

    public void setDriverVehicle(DriverVehicle driverVehicle) {
        this.driverVehicle = driverVehicle;
    }
}
