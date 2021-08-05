package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class VehicleAccident {

  @Id
  private String refNumber;
  private LocalDate accidentDate;
  private LocalTime accidentTime;
  private String insuranceNo;
  private String vehicleID;

  @ManyToOne
  private AccidentMaintenanceManager accidentMaintenanceManager;


    public String getRefNumber() {
        return refNumber;
    }

    public void setRefNumber(String refNumber) {
        this.refNumber = refNumber;
    }

    public LocalDate getAccidentDate() {
        return accidentDate;
    }

    public void setAccidentDate(LocalDate accidentDate) {
        this.accidentDate = accidentDate;
    }

    public LocalTime getAccidentTime() {
        return accidentTime;
    }

    public void setAccidentTime(LocalTime accidentTime) {
        this.accidentTime = accidentTime;
    }

    public String getInsuranceNo() {
        return insuranceNo;
    }

    public void setInsuranceNo(String insuranceNo) {
        this.insuranceNo = insuranceNo;
    }

    public String getVehicleID() {
        return vehicleID;
    }

    public void setVehicleID(String vehicleID) {
        this.vehicleID = vehicleID;
    }

    public AccidentMaintenanceManager getAccidentMaintenanceManager() {
        return accidentMaintenanceManager;
    }

    public void setAccidentMaintenanceManager(AccidentMaintenanceManager accidentMaintenanceManager) {
        this.accidentMaintenanceManager = accidentMaintenanceManager;
    }
}
