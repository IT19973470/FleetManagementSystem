package lk.fleet.service.impl;

import lk.fleet.dto.*;
import lk.fleet.entity.*;
import lk.fleet.repository.*;
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

    @Autowired
    private SecurityOfficerRepository securityOfficerRepository;

    @Override
    public UserAccountDTO addGeneralManagerUserAccount(UserAccount userAccount) {
        LocalDateTime localDateTime = LocalDateTime.now();//current date
        userAccount.setEmployeeID("GM" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));

        userAccount.setApproved(true);
        return new UserAccountDTO(userAccountRepository.save(userAccount));
    }


    @Override
    public TransportManagerDTO addTransportManagerUserAccount(TransportManager transportManager) {
        LocalDateTime localDateTime = LocalDateTime.now();//current date
        transportManager.setTransportManagerId("TM" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
        transportManager.getUserAccount().setEmployeeID(transportManager.getTransportManagerId());

        transportManager.getUserAccount().setApproved(true);
        userAccountRepository.save(transportManager.getUserAccount());
        transportManagerRepository.save(transportManager);
        return new TransportManagerDTO(transportManager,new UserAccountDTO(transportManager.getUserAccount()));
    }

    @Override
    public BookingManagementClerkDTO addBookingManagementClerkUserAccount(BookingManagementClerk bookingManagementClerk) {
        LocalDateTime localDateTime = LocalDateTime.now();//current date
        bookingManagementClerk.setBookingManagementClerkId("BMC" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
        bookingManagementClerk.getUserAccount().setEmployeeID(bookingManagementClerk.getBookingManagementClerkId());

        bookingManagementClerk.getUserAccount().setApproved(true);
        userAccountRepository.save(bookingManagementClerk.getUserAccount());
        bookingManagementClerkRepository.save(bookingManagementClerk);
        return new BookingManagementClerkDTO(bookingManagementClerk, new UserAccountDTO(bookingManagementClerk.getUserAccount()));
    }

    @Override
    public VehicleDriverManagementClerkDTO addVehicleDiverManagementClerkUserAccount(VehicleDriverManagementClerk vehicleDriverManagementClerk) {
        LocalDateTime localDateTime = LocalDateTime.now();//current date
        vehicleDriverManagementClerk.setVehicleDriverManagementId("VMC" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
        vehicleDriverManagementClerk.getUserAccount().setEmployeeID(vehicleDriverManagementClerk.getVehicleDriverManagementId());

        vehicleDriverManagementClerk.getUserAccount().setApproved(true);
        userAccountRepository.save(vehicleDriverManagementClerk.getUserAccount());
        vehicleDriverManagementClerkRepository.save(vehicleDriverManagementClerk);
        return new VehicleDriverManagementClerkDTO(vehicleDriverManagementClerk, new UserAccountDTO(vehicleDriverManagementClerk.getUserAccount()));
    }

    @Override
    public SecurityOfficerDTO addSecurityOfficerUserAccount(SecurityOfficer securityOfficer) {
        LocalDateTime localDateTime = LocalDateTime.now();//current date
        securityOfficer.setSecurityOfficerID("SO" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
        securityOfficer.getUserAccount().setEmployeeID(securityOfficer.getSecurityOfficerID());

        securityOfficer.getUserAccount().setApproved(true);
        userAccountRepository.save(securityOfficer.getUserAccount());
        securityOfficerRepository.save(securityOfficer);
        return new SecurityOfficerDTO(securityOfficer,new UserAccountDTO(securityOfficer.getUserAccount()));
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
    public UserAccountDTO updateGeneralManagerUserAccount(String employeeID, UserAccount userAccount) {
        Optional<UserAccount> optionalUserAccount = userAccountRepository.findById(employeeID);
        if (optionalUserAccount.isPresent()) {
            UserAccount userAccountObj = optionalUserAccount.get();
            userAccountObj.setName(userAccount.getName());
            userAccountObj.setAddress(userAccount.getAddress());
            userAccountObj.setContactNo(userAccount.getContactNo());
            userAccountObj.setEmail(userAccount.getEmail());

            return new UserAccountDTO(userAccountRepository.save(userAccountObj));
        }

        return null;
    }

    @Override
    public SecurityOfficerDTO updateSecurityOfficerAccount(String securityOfficerId, SecurityOfficer securityOfficer) {

        Optional<SecurityOfficer> optionalSecurityOfficer = securityOfficerRepository.findById(securityOfficerId);
            if (optionalSecurityOfficer.isPresent()) {
            SecurityOfficer securityOfficerObject = optionalSecurityOfficer.get();
            securityOfficerObject.getUserAccount().setName(securityOfficer.getUserAccount().getName());
            securityOfficerObject.getUserAccount().setAddress(securityOfficer.getUserAccount().getAddress());
            securityOfficerObject.getUserAccount().setContactNo(securityOfficer.getUserAccount().getContactNo());
            securityOfficerObject.getUserAccount().setEmail(securityOfficer.getUserAccount().getEmail());


            userAccountRepository.save(securityOfficerObject.getUserAccount());
            return new SecurityOfficerDTO(securityOfficerRepository.save(securityOfficerObject));
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
        UserAccount userAccountObj = userAccountRepository.findAllByEmailAndPasswordAndApproved(userAccount.getEmail(), userAccount.getPassword(), true);
        return new UserAccountDTO(userAccountObj);
    }

}
