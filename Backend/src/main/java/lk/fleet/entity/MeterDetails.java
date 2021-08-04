package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class MeterDetails {

    @Id
    private String meterID;
    private int inMeter;
    private int OutMeter;
    private double mileage;
    private LocalDateTime dateTime;

    public String getMeterID() {
        return meterID;
    }

    public void setMeterID(String meterID) {
        this.meterID = meterID;
    }

    public int getInMeter() {
        return inMeter;
    }

    public void setInMeter(int inMeter) {
        this.inMeter = inMeter;
    }

    public int getOutMeter() {
        return OutMeter;
    }

    public void setOutMeter(int outMeter) {
        OutMeter = outMeter;
    }

    public double getMileage() {
        return mileage;
    }

    public void setMileage(double mileage) {
        this.mileage = mileage;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
}
