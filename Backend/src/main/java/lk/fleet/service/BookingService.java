package lk.fleet.service;

import lk.fleet.dto.BookingDTO;
import lk.fleet.dto.DriverVehicleDTO;
import lk.fleet.dto.ShiftDTO;
import lk.fleet.dto.SpecialBookingDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Shift;
import lk.fleet.entity.SpecialBooking;
import lk.fleet.entity.VipBooking;

import java.util.List;

import java.util.List;

public interface BookingService {

    List<DriverVehicleDTO> getDriverVehicles(String driverId);

    ShiftDTO addDriverShift(Shift shift);

    ShiftDTO updateDriverShift(String shiftId, Shift shift);

    List<ShiftDTO> getDriverShifts();

    List<ShiftDTO> getDriverShiftsByDriverId(String driverId);

    boolean deleteDriverShift(String shiftId);

    Booking addBooking(Booking booking);

    BookingDTO updateBooking(String bookingId, Booking booking);

    boolean deleteBooking(String bookingId);

    List<BookingDTO> getAllBookings();

    List<BookingDTO> getBookings();


    List<BookingDTO> getBookingsByBookingId(String bookingId);


    //VipBooking addVipBooking(VipBooking vipBooking);


    //List<BookingDTO> getBookingsByBookingManagementClerkId(String bookingManagementClerkId);


}
