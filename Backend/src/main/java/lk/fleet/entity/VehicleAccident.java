package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class VehicleAccident {

  @Id
  private String refNumber;
  private LocalDate accidentDate;
  private LocalTime accidentTime;
  private String insuranceCompany;

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

    public String getInsuranceCompany() {
        return insuranceCompany;
    }

    public void setInsuranceCompany(String insuranceCompany) {
        this.insuranceCompany = insuranceCompany;
    }

    public AccidentMaintenanceManager getAccidentMaintenanceManager() {
        return accidentMaintenanceManager;
    }

    public void setAccidentMaintenanceManager(AccidentMaintenanceManager accidentMaintenanceManager) {
        this.accidentMaintenanceManager = accidentMaintenanceManager;
    }
}
