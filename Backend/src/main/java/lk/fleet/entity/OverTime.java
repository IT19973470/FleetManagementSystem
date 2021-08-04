package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@Entity
public class OverTime {

    @Id
    private String overTimeID;
    private String noOfShifts;
    private LocalDate startTime;
    private LocalDate endTime;
    private String approval;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Driver driver;

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public String getOverTimeID() {
        return overTimeID;
    }

    public void setOverTimeID(String overTimeID) {
        this.overTimeID = overTimeID;
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
