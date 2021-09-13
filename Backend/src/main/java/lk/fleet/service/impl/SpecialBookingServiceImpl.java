package lk.fleet.service.impl;

import lk.fleet.dto.BookingDTO;
import lk.fleet.dto.SpecialBookingDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.SpecialBooking;
import lk.fleet.repository.BookingRepository;
import lk.fleet.repository.SpecialBookingRepository;
import lk.fleet.service.SpecialBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SpecialBookingServiceImpl implements SpecialBookingService {

    @Autowired
    private SpecialBookingRepository specialBookingRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public SpecialBookingDTO addSpecialBooking(SpecialBooking specialBooking) {
        specialBooking.getBooking().setBookingId("Book" + specialBooking.getBooking().getBookingDateTime().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss")));
        specialBooking.setSpecialBookingId((specialBooking.getBooking().getBookingId()));
        bookingRepository.save(specialBooking.getBooking());
        return new SpecialBookingDTO(specialBookingRepository.save(specialBooking), new BookingDTO(specialBooking.getBooking()));
    }


    @Override
    public SpecialBookingDTO updateSpecialBooking(String specialBookingId, SpecialBooking specialBooking) {

        Optional<SpecialBooking> optionalSpecialBooking = specialBookingRepository.findById(specialBookingId);
        if (optionalSpecialBooking.isPresent()) {
            SpecialBooking specialBooking1 = optionalSpecialBooking.get();

            specialBooking.setDescription(specialBooking.getDescription());
            specialBooking.setNoOfPassengers(specialBooking.getNoOfPassengers());
            specialBooking.setApprovedFuelAmount(specialBooking.getApprovedFuelAmount());

            return new SpecialBookingDTO(specialBookingRepository.save(specialBooking1));
        }
        return null;
    }

    @Override
    public boolean deleteSpecialBooking(String specialBookingId) {
        specialBookingRepository.deleteById(specialBookingId);
        return true;
    }

    @Override
    public List<SpecialBookingDTO> getSpecialBooking() {
        List<SpecialBookingDTO> specialBookingDTOS = new ArrayList<>();
        List<SpecialBooking> specialBookings = specialBookingRepository.findAll();
        for (SpecialBooking specialBooking : specialBookings) {
            specialBookingDTOS.add(new SpecialBookingDTO(specialBooking));
        }
        return specialBookingDTOS;
    }


}
