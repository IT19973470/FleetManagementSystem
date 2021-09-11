package lk.fleet.service;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.dto.PassengerDTO;
import lk.fleet.entity.*;

import java.util.List;


public interface ApplicationPassengerService {
    ApplicationDTO addApplication(Application application);
    //PassengerPassengerApplication UpdatePassengerApp(String aplicationID,PassengerPassengerApplication passengerPassengerApplication);
    PassengerPassengerApplication addPassengerpassenger(PassengerPassengerApplication passengerPassengerApplication);
//    PassengerApplication addPassengerApplication(PassengerApplication application);
    PassengerPassengerApplication addPassengerPassengerApplication(PassengerPassengerApplication passengerPassengerApplication);
    Passenger addPassenger(Passenger passenger);
//    ApplicationDTO updateApplication(String applicationID, PassengerPassengerApplication passengerPassengerApplication);
    List<ApplicationDTO> getPassengerApp();
    List<PassengerApplication> getAPassengerApp();
    List<PassengerApplicationDTO> getdto();
    List<PassengerDTO> getPassengers();
    PassengerPassengerApplication passengerApplication( String passengerApplicationID ,String passengerID);
    ApplicationDTO getPassengerApp(String ID);
    //UserAccount addApplicant(UserAccount userAccount);
    boolean deletePassengerApp(String passengerApplicationID,String passengerID);
}
