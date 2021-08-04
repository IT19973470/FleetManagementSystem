package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

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

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "overTime")
    private Set<Shift> shifts;

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
