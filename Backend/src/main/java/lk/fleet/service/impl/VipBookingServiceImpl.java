package lk.fleet.service.impl;

import lk.fleet.dto.BookingDTO;
import lk.fleet.dto.VipBookingDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.VipBooking;
import lk.fleet.repository.VipBookingRepository;
import lk.fleet.service.VipBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VipBookingServiceImpl implements VipBookingService {

    @Autowired
    private VipBookingRepository vipBookingRepository;

    @Override
    public VipBookingDTO addVipBooking(VipBooking vipBooking) {
        return new VipBookingDTO(vipBookingRepository.save(vipBooking));
    }

    @Override
    public VipBookingDTO updateVipBooking(String vipBookingId, VipBooking vipBooking) {
        Optional<VipBooking> optionalVipBooking = vipBookingRepository.findById(vipBookingId);
        if(optionalVipBooking.isPresent()) {
            VipBooking vipBookingObject = optionalVipBooking.get();
            vipBookingObject.setApproval(vipBooking.isApproval());
            vipBookingObject.setTimePeriod(vipBooking.getTimePeriod());
            vipBookingObject.setApprovedFuelAmount(vipBooking.getApprovedFuelAmount());

            return new VipBookingDTO(vipBookingRepository.save(vipBookingObject));
        }
        return null;
    }
}
