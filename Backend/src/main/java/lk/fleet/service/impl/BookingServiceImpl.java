package lk.fleet.service.impl;

import lk.fleet.dto.*;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Driver;
import lk.fleet.entity.Token;
import lk.fleet.entity.UserAccount;
import lk.fleet.repository.BookingRepository;
import lk.fleet.repository.UserAccountRepository;
import lk.fleet.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public BookingDTO addBooking(Booking booking) {
        return new BookingDTO(bookingRepository.save(booking));
    }

    @Override
    public BookingDTO updateBooking(String bookingId, Booking booking) {

        Optional<Booking> optionalBooking = bookingRepository.findById(bookingId);
        if(optionalBooking.isPresent()) {
            Booking bookingObject = optionalBooking.get();
            bookingObject.setBookingStatus(booking.isBookingStatus());

            return new BookingDTO(bookingRepository.save(bookingObject));
        }
        return null;
    }

    @Override
    public boolean deleteBooking(String bookingId) {
        bookingRepository.deleteById(bookingId);
        return true;
    }

    @Override
    public List<BookingDTO> getAllBookings() {
        List<Booking> bookings = bookingRepository.findAll();
        List<BookingDTO> bookingDTOS = new ArrayList<>();
        for (Booking booking : bookings) {
            BookingDTO bookingDTO = new BookingDTO(booking);
            bookingDTO.setVehicle(new VehicleDTO(booking.getShift().getDriverVehicle().getVehicle()));
            Driver driver = booking.getShift().getDriverVehicle().getDriver();
            bookingDTO.setDriver(new DriverDTO(driver,new UserAccountDTO(driver.getUserAccount())));
            bookingDTOS.add(bookingDTO);
        }
        return bookingDTOS;
    }
}
