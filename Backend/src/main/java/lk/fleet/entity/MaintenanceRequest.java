package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class MaintenanceRequest {

  @Id
  private String maintenanceRequestID;
  private String details;
  private LocalDate date;
  private String type;
  private String description;
  private LocalTime time;

  public String getMaintenanceRequestID() {
    return maintenanceRequestID;
  }

  public void setMaintenanceRequestID(String maintenanceRequestID) {
    this.maintenanceRequestID = maintenanceRequestID;
  }

  public String getDetails() {
    return details;
  }

  public void setDetails(String details) {
    this.details = details;
  }

  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public LocalTime getTime() {
    return time;
  }

  public void setTime(LocalTime time) {
    this.time = time;
  }
}