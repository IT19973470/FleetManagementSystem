package lk.fleet.service.impl;

import lk.fleet.repository.SpecialBookingRepository;
import lk.fleet.service.SpecialBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpecialBookingServiceImpl implements SpecialBookingService {

    @Autowired
    private SpecialBookingRepository specialBookingRepository;

    @Override
    public boolean deleteSpecialBooking(String specialBookingId) {
        specialBookingRepository.deleteById(specialBookingId);
        return true;
    }
}
