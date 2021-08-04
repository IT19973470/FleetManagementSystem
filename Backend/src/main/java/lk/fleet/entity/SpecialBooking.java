package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class SpecialBooking {
    @Id
    private String specialBookingId;
    private String noOfPassengers;
    private String approvedFuelAmount;
    private String description;

    public String getSpecialBookingId() {
        return specialBookingId;
    }

    public void setSpecialBookingId(String specialBookingId) {
        this.specialBookingId = specialBookingId;
    }

    public String getNoOfPassengers() {
        return noOfPassengers;
    }

    public void setNoOfPassengers(String noOfPassengers) {
        this.noOfPassengers = noOfPassengers;
    }

    public String getApprovedFuelAmount() {
        return approvedFuelAmount;
    }

    public void setApprovedFuelAmount(String approvedFuelAmount) {
        this.approvedFuelAmount = approvedFuelAmount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
