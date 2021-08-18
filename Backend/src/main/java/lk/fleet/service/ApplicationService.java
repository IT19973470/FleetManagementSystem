package lk.fleet.service;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.Application;
import lk.fleet.entity.Passenger;
import lk.fleet.entity.PassengerApplication;
import lk.fleet.entity.PassengerPassengerApplication;

import java.util.List;


public interface ApplicationService {
//    Application addApplication(Application application); //jarawa epa
//    PassengerApplication addPassengerApplication(PassengerApplication application);
    PassengerPassengerApplication addpassenerApplicationpassengerPassengerApplicationapplication(PassengerPassengerApplication passengerPassengerApplication);
    Passenger addPassenger(Passenger passenger);
//    ApplicationDTO updateApplication(String applicationID, PassengerPassengerApplication passengerPassengerApplication);
    ApplicationDTO updateApplication(String aplicationID, Application application);
    List<Application> getPassengerApp();
    List<PassengerApplication> getAPassengerApp();
    List<PassengerApplicationDTO> getdto();
}
