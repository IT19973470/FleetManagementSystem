package lk.fleet.dto;

import lk.fleet.entity.Booking;
import lk.fleet.entity.Token;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class BookingDTO {

    private String bookingId;
    private LocalDateTime bookingDateTime;
    private String destination;
    private boolean bookingStatus;
    private VehicleDTO vehicle;
    private DriverDTO driver;
    private TokenDTO token;

    public BookingDTO(Booking booking) {
        if(booking != null) {
            this.bookingId = booking.getBookingId();
            this.bookingDateTime =booking.getBookingDateTime();
            this.destination = booking.getDestination();
            this.bookingStatus = booking.isBookingStatus();
        }
    }


    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public LocalDateTime getBookingDateTime() {
        return bookingDateTime;
    }

    public void setBookingDateTime(LocalDateTime bookingDateTime) {
        this.bookingDateTime = bookingDateTime;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public boolean isBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(boolean bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public VehicleDTO getVehicle() {
        return vehicle;
    }

    public void setVehicle(VehicleDTO vehicle) {
        this.vehicle = vehicle;
    }

    public DriverDTO getDriver() {
        return driver;
    }

    public void setDriver(DriverDTO driver) {
        this.driver = driver;
    }

    public TokenDTO getToken() {
        return token;
    }

    public void setToken(TokenDTO token) {
        this.token = token;
    }
}
