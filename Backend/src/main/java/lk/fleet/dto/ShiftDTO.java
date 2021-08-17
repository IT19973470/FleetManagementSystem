package lk.fleet.dto;

import lk.fleet.entity.Shift;

import java.time.LocalDate;
import java.time.LocalTime;

public class ShiftDTO {

    private String shiftId;
    private LocalDate shiftDate;
    private LocalTime startingTime;
    private LocalTime endingTime;
    private boolean attendance;


    public ShiftDTO(Shift shift){
        this.shiftId = shift.getShiftId();
        this.shiftDate = shift.getShiftDate();
        this.endingTime = shift.getEndingTime();
        this.endingTime = shift.getEndingTime();
        this.attendance = shift.isAttendance();

    }

    public String getShiftId() {
        return shiftId;
    }

    public void setShiftId(String shiftId) {
        this.shiftId = shiftId;
    }

    public LocalDate getShiftDate() {
        return shiftDate;
    }

    public void setShiftDate(LocalDate shiftDate) {
        this.shiftDate = shiftDate;
    }

    public LocalTime getStartingTime() {
        return startingTime;
    }

    public void setStartingTime(LocalTime startingTime) {
        this.startingTime = startingTime;
    }

    public LocalTime getEndingTime() {
        return endingTime;
    }

    public void setEndingTime(LocalTime endingTime) {
        this.endingTime = endingTime;
    }

    public boolean isAttendance() {
        return attendance;
    }

    public void setAttendance(boolean attendance) {
        this.attendance = attendance;
    }


}
