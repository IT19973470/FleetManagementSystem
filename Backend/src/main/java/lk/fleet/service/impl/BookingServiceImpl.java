package lk.fleet.service.impl;

import lk.fleet.dto.*;
import lk.fleet.entity.*;
import lk.fleet.repository.BookingRepository;
import lk.fleet.repository.DriverVehicleRepository;
import lk.fleet.repository.ShiftRepository;
import lk.fleet.repository.UserAccountRepository;
import lk.fleet.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private DriverVehicleRepository driverVehicleRepository;
    @Autowired
    private ShiftRepository shiftRepository;

    @Override
    public Booking addBooking(Booking booking) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        booking.setBookingId("B" + dateTime);
        booking.setBookingManagementClerk(booking.getBookingManagementClerk());
        return bookingRepository.save(booking);
    }

    @Override
    public BookingDTO updateBooking(String bookingId, Booking booking) {

        Optional<Booking> optionalBooking = bookingRepository.findById(bookingId);
        if (optionalBooking.isPresent()) {
            Booking bookingObject = optionalBooking.get();

            bookingObject.setBookingDateTime(booking.getBookingDateTime());
            bookingObject.setBookingStatus(booking.isBookingStatus());
            bookingObject.setDestination(booking.getDestination());

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
    public List<BookingDTO> getBookings() {
        List<BookingDTO> bookingDTOS =new ArrayList<>();
        List<Booking> bookings = bookingRepository.findAll();
        for(Booking booking: bookings){
            bookingDTOS.add(new BookingDTO(booking));
        }
        return bookingDTOS;
    }

    @Override
    public List<DriverVehicleDTO> getDriverVehicles(String driverId) {
        List<DriverVehicle> driverVehicles = driverVehicleRepository.getDriverVehicleByDriverDriverID(driverId);
//        List<DriverVehicle> driverVehicles = new ArrayList<>();
//        DriverVehicle driverVehicle1 = new DriverVehicle();
//        driverVehicle1.setDriverVehicleID(new DriverVehiclePK("D001", "V001"));
//        Driver driver = new Driver();
//        UserAccount userAccount = new UserAccount();
//        userAccount.setNameWithInitials("A.B.C Silva");
//        userAccount.setDob(LocalDate.now());
//        userAccount.setRegisteredDate(LocalDate.now());
//        driver.setUserAccount(userAccount);
//        driver.setDriverID("D001");
//        driverVehicle1.setDriver(driver);
//        Vehicle vehicle = new Vehicle();
//        vehicle.setVehicleType("Car");
//        driverVehicle1.setVehicle(vehicle);
//        driverVehicles.add(driverVehicle1);

        List<DriverVehicleDTO> driverVehicleDTOS = new ArrayList<>();
        for (DriverVehicle driverVehicle : driverVehicles) {
            DriverVehicleDTO driverVehicleDTO = new DriverVehicleDTO(driverVehicle);
            driverVehicleDTO.setVehicle(new VehicleDTO(driverVehicle.getVehicle()));
            driverVehicleDTO.setDriver(new DriverDTO(driverVehicle.getDriver(), new UserAccountDTO(driverVehicle.getDriver().getUserAccount())));
            driverVehicleDTOS.add(driverVehicleDTO);
        }
        return driverVehicleDTOS;
    }

    @Override
    public ShiftDTO addDriverShift(Shift shift) {
        shift.setShiftId("SH" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss")));
        return new ShiftDTO(shiftRepository.save(shift));
    }

    @Override
    public ShiftDTO updateDriverShift(String shiftId, Shift shift) {
        Optional<Shift> optionalShift = shiftRepository.findById(shiftId);
        if (optionalShift.isPresent()) {
            Shift shiftObj = optionalShift.get();
            shiftObj.setDriverVehicle(shift.getDriverVehicle());
            shiftObj.setShiftDate(shift.getShiftDate());
            shiftObj.setAttendance(shift.isAttendance());
            shiftObj.setStartingTime(shift.getStartingTime());
            shiftObj.setEndingTime(shift.getEndingTime());
            shiftObj.setBookingManagementClerk(shift.getBookingManagementClerk());
            shiftObj.setOverTime(shift.getOverTime());
            return new ShiftDTO(shiftRepository.save(shiftObj));
        }
        return null;
    }

    @Override
    public List<ShiftDTO> getDriverShifts() {
        List<Shift> driverShifts = shiftRepository.getDriverShifts();
        List<ShiftDTO> shiftDTOS = new ArrayList<>();
        for (Shift driverShift : driverShifts) {
            ShiftDTO shiftDTO = new ShiftDTO(driverShift);
            DriverVehicleDTO driverVehicleDTO = new DriverVehicleDTO(driverShift.getDriverVehicle());
            driverVehicleDTO.setVehicle(new VehicleDTO(driverShift.getDriverVehicle().getVehicle()));
            driverVehicleDTO.setDriver(new DriverDTO(driverShift.getDriverVehicle().getDriver(), new UserAccountDTO(driverShift.getDriverVehicle().getDriver().getUserAccount())));
            shiftDTO.setDriverVehicle(driverVehicleDTO);
            shiftDTOS.add(shiftDTO);
        }
        return shiftDTOS;
    }

    @Override
    public List<ShiftDTO> getDriverShiftsByDriverId(String driverId) {
        List<Shift> driverShiftsByDriverId = shiftRepository.getDriverShiftsByDriverId(driverId);
        List<ShiftDTO> shiftDTOS = new ArrayList<>();
        for (Shift driverShift : driverShiftsByDriverId) {
            ShiftDTO shiftDTO = new ShiftDTO(driverShift);
            DriverVehicleDTO driverVehicleDTO = new DriverVehicleDTO(driverShift.getDriverVehicle());
            driverVehicleDTO.setVehicle(new VehicleDTO(driverShift.getDriverVehicle().getVehicle()));
            driverVehicleDTO.setDriver(new DriverDTO(driverShift.getDriverVehicle().getDriver(), new UserAccountDTO(driverShift.getDriverVehicle().getDriver().getUserAccount())));
            shiftDTO.setDriverVehicle(driverVehicleDTO);
            shiftDTOS.add(shiftDTO);
        }
        return shiftDTOS;
    }

    @Override
    public boolean deleteDriverShift(String shiftId) {
        shiftRepository.deleteById(shiftId);
        return true;
    }


}
