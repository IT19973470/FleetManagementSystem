package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ProgramBooking {
    @Id
    private String programBookingId;

    public String getProgramBookingId() {
        return programBookingId;
    }

    public void setProgramBookingId(String programBookingId) {
        this.programBookingId = programBookingId;
    }
}
