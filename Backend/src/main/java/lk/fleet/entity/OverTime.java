package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class OverTime {

    @Id
    private String overTimeID;
    private String driverID;
    private String noOfShifts;
    private LocalDate startTime;
    private LocalDate endTime;
    private String approval;

    public String getOverTimeID() {
        return overTimeID;
    }

    public void setOverTimeID(String overTimeID) {
        this.overTimeID = overTimeID;
    }

    public String getDriverID() {
        return driverID;
    }

    public void setDriverID(String driverID) {
        this.driverID = driverID;
    }

    public String getNoOfShifts() {
        return noOfShifts;
    }

    public void setNoOfShifts(String noOfShifts) {
        this.noOfShifts = noOfShifts;
    }

    public LocalDate getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDate startTime) {
        this.startTime = startTime;
    }

    public LocalDate getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDate endTime) {
        this.endTime = endTime;
    }

    public String getApproval() {
        return approval;
    }

    public void setApproval(String approval) {
        this.approval = approval;
    }
}
