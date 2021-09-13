package lk.fleet.service;

import lk.fleet.dto.VipBookingDTO;
import lk.fleet.entity.VipBooking;

public interface VipBookingService {
    VipBookingDTO addVipBooking(VipBooking vipBooking);

    VipBookingDTO updateVipBooking(String vipBookingId, VipBooking vipBooking);
}
