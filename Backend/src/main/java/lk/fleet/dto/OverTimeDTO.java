package lk.fleet.dto;

import lk.fleet.entity.OverTime;

import java.time.LocalDate;
import java.time.LocalTime;

public class OverTimeDTO {
    private String overTimeID;
    private LocalDate otDate;
    private int noOfShifts;
    private LocalTime startTime;
    private LocalTime endTime;
    private boolean approval;

    public OverTimeDTO(String overTimeID, LocalDate otDate, int noOfShifts, LocalTime startTime, LocalTime endTime, boolean approval) {
        this.overTimeID = overTimeID;
        this.otDate = otDate;
        this.noOfShifts = noOfShifts;
        this.startTime = startTime;
        this.endTime = endTime;
        this.approval = approval;
    }

    public OverTimeDTO(OverTime overTime) {

    }

    public String getOverTimeID() {
        return overTimeID;
    }

    public void setOverTimeID(String overTimeID) {
        this.overTimeID = overTimeID;
    }

    public int getNoOfShifts() {
        return noOfShifts;
    }

    public void setNoOfShifts(int noOfShifts) {
        this.noOfShifts = noOfShifts;
    }


    public LocalDate getOtDate() {
        return otDate;
    }

    public void setOtDate(LocalDate otDate) {
        this.otDate = otDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public boolean isApproval() {
        return approval;
    }

    public void setApproval(boolean approval) {
        this.approval = approval;
    }
}
