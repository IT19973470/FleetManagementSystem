package lk.fleet.service;

import lk.fleet.dto.ProgramBookingDTO;
import lk.fleet.entity.ProgramBooking;

public interface ProgramBookingService {

    ProgramBookingDTO addProgramBooking(ProgramBooking programBooking);
    boolean deleteBooking(String programBookingId);
}
