package lk.fleet.dto;

import lk.fleet.entity.ProgramBooking;

public class ProgramBookingDTO {

    private String programBookingId;

    public ProgramBookingDTO(ProgramBooking programBooking){
        this.programBookingId = programBooking.getProgramBookingId();
    }

    public String getProgramBookingId() {
        return programBookingId;
    }

    public void setProgramBookingId(String programBookingId) {
        this.programBookingId = programBookingId;
    }
}
