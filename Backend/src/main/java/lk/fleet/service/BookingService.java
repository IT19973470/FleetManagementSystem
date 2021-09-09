package lk.fleet.service;

import lk.fleet.dto.BookingDTO;
import lk.fleet.entity.Booking;

import java.util.List;

public interface BookingService {
    BookingDTO addBooking(Booking booking);

    BookingDTO updateBooking(String bookingId, Booking booking);

    boolean deleteBooking(String bookingId);

    List<BookingDTO> getAllBookings();
}
