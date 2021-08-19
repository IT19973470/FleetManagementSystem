package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;

@Entity
public class MeterDetail {

    @Id
    private String meterID;
    private double inMeter;
    private double OutMeter;
    private double mileage;
    private LocalDateTime updatedDateTime;

    @OneToOne
    private Token token;

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
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

    public LocalDateTime getUpdatedDateTime() {
        return updatedDateTime;
    }

    public void setUpdatedDateTime(LocalDateTime updatedDateTime) {
        this.updatedDateTime = updatedDateTime;
    }
}
