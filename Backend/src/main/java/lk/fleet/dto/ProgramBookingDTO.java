package lk.fleet.dto;

import lk.fleet.entity.ProgramBooking;
import lk.fleet.entity.VipBooking;

public class ProgramBookingDTO {

    private String programBookingId;
    private BookingDTO booking;

    public ProgramBookingDTO(ProgramBooking programBooking) {
        if (programBooking != null) {
            this.programBookingId = programBooking.getProgramBookingId();
        }
    }

    public ProgramBookingDTO(ProgramBooking programBooking, BookingDTO booking) {
        this(programBooking);
        this.booking = booking;
    }

    public String getProgramBookingId() {
        return programBookingId;
    }

    public void setProgramBookingId(String programBookingId) {
        this.programBookingId = programBookingId;
    }

    public BookingDTO getBooking() {
        return booking;
    }

    public void setBooking(BookingDTO booking) {
        this.booking = booking;
    }
}
