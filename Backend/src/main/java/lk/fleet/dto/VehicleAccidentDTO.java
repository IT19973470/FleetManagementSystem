package lk.fleet.dto;

import lk.fleet.entity.VehicleAccident;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class VehicleAccidentDTO {

    private String vehicleAccidentID;
    private String accidentDate;
    private String accidentTime;
    private String accidentTimeActual;
    private String insuranceNo;
    private boolean insuranceStatus;
    private String vehicleID;
    private  String driverID;

    public VehicleAccidentDTO(VehicleAccident vehicleAccident){
        if(vehicleAccident != null){
            this.vehicleAccidentID = vehicleAccident.getVehicleAccidentID();
            this.accidentDate = vehicleAccident.getAccidentDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            this.accidentTime = vehicleAccident.getAccidentTime().format(DateTimeFormatter.ofPattern("hh:mm a"));
            this.accidentTimeActual = vehicleAccident.getAccidentTime().format(DateTimeFormatter.ofPattern("HH:mm"));
            this.insuranceNo = vehicleAccident.getInsuranceNo();
            this.insuranceStatus = vehicleAccident.isInsuranceStatus();
            this.vehicleID=vehicleAccident.getDriverVehicle().getVehicle().getVehicleId();
            this.driverID=vehicleAccident.getDriverVehicle().getDriver().getDriverID();

        }
    }

    public String getVehicleAccidentID() {
        return vehicleAccidentID;
    }

    public void setVehicleAccidentID(String vehicleAccidentID) {
        this.vehicleAccidentID = vehicleAccidentID;
    }

    public String getDriverID() {
        return driverID;
    }

    public void setDriverID(String driverID) {
        this.driverID = driverID;
    }

    public String getVehicleID() {
        return vehicleID;
    }

    public void setVehicleID(String vehicleID) {
        this.vehicleID = vehicleID;
    }

    public String getAccidentDate() {
        return accidentDate;
    }

    public void setAccidentDate(String accidentDate) {
        this.accidentDate = accidentDate;
    }

    public String getAccidentTime() {
        return accidentTime;
    }

    public void setAccidentTime(String accidentTime) {
        this.accidentTime = accidentTime;
    }

    public String getAccidentTimeActual() {
        return accidentTimeActual;
    }

    public void setAccidentTimeActual(String accidentTimeActual) {
        this.accidentTimeActual = accidentTimeActual;
    }

    public String getInsuranceNo() {
        return insuranceNo;
    }

    public void setInsuranceNo(String insuranceNo) {
        this.insuranceNo = insuranceNo;
    }

    public boolean isInsuranceStatus() {
        return insuranceStatus;
    }

    public void setInsuranceStatus(boolean insuranceStatus) {
        this.insuranceStatus = insuranceStatus;
    }
}
