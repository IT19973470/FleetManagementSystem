package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class VehicleAccident {

  @Id
  private String refNumber;
  private LocalDate accidentDate;
  private LocalDate accidentTime;
  private String driverName;

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

    public LocalDate getAccidentTime() {
        return accidentTime;
    }

    public void setAccidentTime(LocalDate accidentTime) {
        this.accidentTime = accidentTime;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }
}
