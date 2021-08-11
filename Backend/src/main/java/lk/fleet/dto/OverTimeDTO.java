package lk.fleet.dto;

import lk.fleet.entity.OverTime;

import java.time.LocalDate;

public class OverTimeDTO {
    private String overTimeID;
    private int noOfShifts;
    private LocalDate startTime;
    private LocalDate endTime;
    private boolean approval;

    public OverTimeDTO(String overTimeID, int noOfShifts, LocalDate startTime, LocalDate endTime, boolean approval) {
        this.overTimeID = overTimeID;
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

    public boolean isApproval() {
        return approval;
    }

    public void setApproval(boolean approval) {
        this.approval = approval;
    }
}
