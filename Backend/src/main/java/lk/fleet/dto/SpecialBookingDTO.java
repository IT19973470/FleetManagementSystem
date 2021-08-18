package lk.fleet.dto;

import lk.fleet.entity.SpecialBooking;

public class SpecialBookingDTO {

    private String specialBookingId;
    private int noOfPassengers;
    private double approvedFuelAmount;
    private String description;

    public SpecialBookingDTO(SpecialBooking specialBooking){
        this.specialBookingId = specialBooking.getSpecialBookingId();
        this.noOfPassengers = specialBooking.getNoOfPassengers();
        this.approvedFuelAmount = specialBooking.getApprovedFuelAmount();
        this.description = specialBooking.getDescription();
    }

    public String getSpecialBookingId() {
        return specialBookingId;
    }

    public void setSpecialBookingId(String specialBookingId) {
        this.specialBookingId = specialBookingId;
    }

    public int getNoOfPassengers() {
        return noOfPassengers;
    }

    public void setNoOfPassengers(int noOfPassengers) {
        this.noOfPassengers = noOfPassengers;
    }

    public double getApprovedFuelAmount() {
        return approvedFuelAmount;
    }

    public void setApprovedFuelAmount(double approvedFuelAmount) {
        this.approvedFuelAmount = approvedFuelAmount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
