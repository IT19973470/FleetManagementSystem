package lk.fleet.service.impl;

import lk.fleet.dto.*;
import lk.fleet.entity.*;
import lk.fleet.repository.BookingManagementClerkRepository;
import lk.fleet.repository.TransportManagerRepository;
import lk.fleet.repository.UserAccountRepository;
import lk.fleet.repository.VehicleDriverManagementClerkRepository;
import lk.fleet.service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
public class UserAccountServiceImpl implements UserAccountService {

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Autowired
    private TransportManagerRepository transportManagerRepository;

    @Autowired
    private BookingManagementClerkRepository bookingManagementClerkRepository;

    @Autowired
    private VehicleDriverManagementClerkRepository vehicleDriverManagementClerkRepository;

    @Override
    public UserAccountDTO addGeneralManagerUserAccount(UserAccount userAccount) {
        LocalDateTime localDateTime = LocalDateTime.now();//current date
        userAccount.setEmployeeID("GM" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
        return new UserAccountDTO(userAccountRepository.save(userAccount));
    }


    @Override
    public TransportManagerDTO addTransportManagerUserAccount(TransportManager transportManager) {
        LocalDateTime localDateTime = LocalDateTime.now();//current date
        transportManager.setTransportManagerId("TM" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
        transportManager.getUserAccount().setEmployeeID(transportManager.getTransportManagerId());

        userAccountRepository.save(transportManager.getUserAccount());
        transportManagerRepository.save(transportManager);
        return new TransportManagerDTO(transportManager,new UserAccountDTO(transportManager.getUserAccount()));
    }

    @Override
    public BookingManagementClerkDTO addBookingManagementClerkUserAccount(BookingManagementClerk bookingManagementClerk) {
        LocalDateTime localDateTime = LocalDateTime.now();//current date
        bookingManagementClerk.setBookingManagementClerkId("BMC" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
        bookingManagementClerk.getUserAccount().setEmployeeID(bookingManagementClerk.getBookingManagementClerkId());

        return new BookingManagementClerkDTO(bookingManagementClerkRepository.save(bookingManagementClerk));
    }

    @Override
    public VehicleDriverManagementClerkDTO addVehicleDiverManagementClerkUserAccount(VehicleDriverManagementClerk vehicleDriverManagementClerk) {
        LocalDateTime localDateTime = LocalDateTime.now();//current date
        vehicleDriverManagementClerk.setVehicleDriverManagementId("VMC" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
        vehicleDriverManagementClerk.getUserAccount().setEmployeeID(vehicleDriverManagementClerk.getVehicleDriverManagementId());

        return new VehicleDriverManagementClerkDTO(vehicleDriverManagementClerkRepository.save(vehicleDriverManagementClerk));
    }

    @Override
    public TransportManagerDTO updateTransportManagerAccount(String transportManagerId, TransportManager transportManager) {

        Optional<TransportManager> optionalTransportManager = transportManagerRepository.findById(transportManagerId);
        if (optionalTransportManager.isPresent()) {
            TransportManager transportManagerObject = optionalTransportManager.get();
            transportManagerObject.getUserAccount().setName(transportManager.getUserAccount().getName());
            transportManagerObject.getUserAccount().setAddress(transportManager.getUserAccount().getAddress());
            transportManagerObject.getUserAccount().setContactNo(transportManager.getUserAccount().getContactNo());
            transportManagerObject.getUserAccount().setEmail(transportManager.getUserAccount().getEmail());

           userAccountRepository.save(transportManagerObject.getUserAccount());
            return new TransportManagerDTO(transportManagerRepository.save(transportManagerObject));
        }
        return null;
    }

    @Override
    public BookingManagementClerkDTO updateBookingManagementClerkAccount(String bookingManagementClerkId, BookingManagementClerk bookingManagementClerk) {

        Optional<BookingManagementClerk> optionalBookingManagementClerk = bookingManagementClerkRepository.findById(bookingManagementClerkId);
        if (optionalBookingManagementClerk.isPresent()) {
            BookingManagementClerk bookingManagementClerkObject = optionalBookingManagementClerk.get();
            bookingManagementClerkObject.getUserAccount().setName(bookingManagementClerk.getUserAccount().getName());
            bookingManagementClerkObject.getUserAccount().setAddress(bookingManagementClerk.getUserAccount().getAddress());
            bookingManagementClerkObject.getUserAccount().setContactNo(bookingManagementClerk.getUserAccount().getContactNo());
            bookingManagementClerkObject.getUserAccount().setEmail(bookingManagementClerk.getUserAccount().getEmail());

            userAccountRepository.save(bookingManagementClerkObject.getUserAccount());
            return new BookingManagementClerkDTO(bookingManagementClerkRepository.save(bookingManagementClerkObject));
        }
        return null;
    }

    @Override
    public VehicleDriverManagementClerkDTO updateVehicleDiverManagementClerkAccount(String vehicleDriverManagementId, VehicleDriverManagementClerk vehicleDriverManagementClerk) {

        Optional<VehicleDriverManagementClerk> optionalVehicleDriverManagementClerk = vehicleDriverManagementClerkRepository.findById(vehicleDriverManagementId);
        if (optionalVehicleDriverManagementClerk.isPresent()) {
            VehicleDriverManagementClerk vehicleDriverManagementClerkObject = optionalVehicleDriverManagementClerk.get();
            vehicleDriverManagementClerkObject.getUserAccount().setName(vehicleDriverManagementClerk.getUserAccount().getName());
            vehicleDriverManagementClerkObject.getUserAccount().setAddress(vehicleDriverManagementClerk.getUserAccount().getAddress());
            vehicleDriverManagementClerkObject.getUserAccount().setContactNo(vehicleDriverManagementClerk.getUserAccount().getContactNo());
            vehicleDriverManagementClerkObject.getUserAccount().setEmail(vehicleDriverManagementClerk.getUserAccount().getEmail());

            userAccountRepository.save(vehicleDriverManagementClerkObject.getUserAccount());
            return new VehicleDriverManagementClerkDTO(vehicleDriverManagementClerkRepository.save(vehicleDriverManagementClerkObject));
        }

        return null;
    }


    @Override
    public UserAccountDTO updateUserAccount(String employeeID, UserAccount userAccount) {
        Optional<UserAccount> optionalUserAccount = userAccountRepository.findById(employeeID);
        if (optionalUserAccount.isPresent()) {
            UserAccount userAccountObj = optionalUserAccount.get();
            userAccountObj.setAccountType(userAccount.getAccountType());
            userAccountObj.setName(userAccount.getName());
            userAccountObj.setAddress(userAccount.getAddress());
            userAccountObj.setContactNo(userAccount.getContactNo());
            userAccountObj.setEmail(userAccount.getEmail());

            return new UserAccountDTO(userAccountRepository.save(userAccountObj));
        }

        return null;
    }

    @Override
    public boolean deleteUserAccount(String employeeID) {
        userAccountRepository.deleteById(employeeID);
        return true;
    }

    @Override
    public UserAccountDTO login(UserAccount userAccount) {
        UserAccount userAccountObj = userAccountRepository.findAllByUsernameAndPasswordAndApproved(userAccount.getUsername(), userAccount.getPassword(), true);
        return new UserAccountDTO(userAccountObj);
    }

}
