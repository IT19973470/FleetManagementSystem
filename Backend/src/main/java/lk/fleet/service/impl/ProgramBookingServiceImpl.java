package lk.fleet.service.impl;


import lk.fleet.dto.ProgramBookingDTO;
import lk.fleet.entity.ProgramBooking;
import lk.fleet.repository.ProgramBookingRepository;
import lk.fleet.service.ProgramBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class ProgramBookingServiceImpl implements ProgramBookingService {

    @Autowired
    private ProgramBookingRepository programBookingRepository;

    @Override
    public ProgramBookingDTO addProgramBooking(ProgramBooking programBooking) {
        return new ProgramBookingDTO(programBookingRepository.save(programBooking));
    }

    @Override
    public boolean deleteBooking(String programBookingId) {
        programBookingRepository.deleteById(programBookingId);
        return true;
    }
}
