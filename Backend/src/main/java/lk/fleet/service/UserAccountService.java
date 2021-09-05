package lk.fleet.service;


import lk.fleet.dto.BookingManagementClerkDTO;
import lk.fleet.dto.TransportManagerDTO;
import lk.fleet.dto.UserAccountDTO;
import lk.fleet.dto.VehicleDriverManagementClerkDTO;

import lk.fleet.dto.*;

import lk.fleet.entity.*;

import java.util.List;

public interface UserAccountService {

    UserAccountDTO addGeneralManagerUserAccount(UserAccount userAccount);

    UserAccountDTO updateGeneralManagerUserAccount(String employeeID, UserAccount userAccount);

    TransportManagerDTO addTransportManagerUserAccount(TransportManager transportManager);

    BookingManagementClerkDTO addBookingManagementClerkUserAccount(BookingManagementClerk bookingManagementClerk);

    SecurityOfficerDTO addSecurityOfficerUserAccount(SecurityOfficer securityOfficer);

    boolean deleteUserAccount(String employeeID);



    VehicleDriverManagementClerkDTO addVehicleDiverManagementClerkUserAccount(VehicleDriverManagementClerk vehicleDriverManagementClerk);

    TransportManagerDTO updateTransportManagerAccount(String transportManagerId, TransportManager transportManager);

    BookingManagementClerkDTO updateBookingManagementClerkAccount(String bookingManagementClerkId, BookingManagementClerk bookingManagementClerk);

    VehicleDriverManagementClerkDTO updateVehicleDiverManagementClerkAccount(String vehicleDriverManagementId, VehicleDriverManagementClerk vehicleDriverManagementClerk);

    SecurityOfficerDTO updateSecurityOfficerAccount(String securityOfficerId, SecurityOfficer securityOfficer);

    UserAccountDTO login(UserAccount userAccount);

    Object addAccidentMaintenanceManagerUserAccount(AccidentMaintenanceManager accidentMaintenanceManager);

    List<UserAccountDTO> getUserAccounts();

//    UserAccountDTO getAllUserAccounts(String accountType);
}
