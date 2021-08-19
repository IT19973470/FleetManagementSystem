package lk.fleet.dto;

import lk.fleet.entity.MeterDetail;

import java.time.format.DateTimeFormatter;

public class MeterDetailDTO {
    private String meterID;
    private double inMeter;
    private double OutMeter;
    private double mileage;
    private String updatedDate;
    private String updatedTime;


    public MeterDetailDTO(MeterDetail meterDetail) {
        if(meterDetail != null) {
            this.meterID = meterDetail.getMeterID();
            this.inMeter = meterDetail.getInMeter();
            this.OutMeter = meterDetail.getOutMeter();
            this.mileage = meterDetail.getMileage();
            this.updatedDate = meterDetail.getUpdatedDateTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            this.updatedTime = meterDetail.getUpdatedDateTime().format(DateTimeFormatter.ofPattern("hh:mm a"));
        }
    }

    public String getMeterID() {
        return meterID;
    }

    public void setMeterID(String meterID) {
        this.meterID = meterID;
    }

    public double getInMeter() {
        return inMeter;
    }

    public void setInMeter(double inMeter) {
        this.inMeter = inMeter;
    }

    public double getOutMeter() {
        return OutMeter;
    }

    public void setOutMeter(double outMeter) {
        OutMeter = outMeter;
    }

    public double getMileage() {
        return mileage;
    }

    public void setMileage(double mileage) {
        this.mileage = mileage;
    }

    public String getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(String updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getUpdatedTime() {
        return updatedTime;
    }

    public void setUpdatedTime(String updatedTime) {
        this.updatedTime = updatedTime;
    }
}
