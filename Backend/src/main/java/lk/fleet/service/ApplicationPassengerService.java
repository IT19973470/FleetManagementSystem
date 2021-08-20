package lk.fleet.service;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.Application;
import lk.fleet.entity.Passenger;
import lk.fleet.entity.PassengerApplication;
import lk.fleet.entity.PassengerPassengerApplication;

import java.util.List;


public interface ApplicationPassengerService {
//    Application addApplication(Application application); //jarawa epa
//    PassengerApplication addPassengerApplication(PassengerApplication application);
    PassengerPassengerApplication addPassengerPassengerApplication(PassengerPassengerApplication passengerPassengerApplication);
    Passenger addPassenger(Passenger passenger);
//    ApplicationDTO updateApplication(String applicationID, PassengerPassengerApplication passengerPassengerApplication);
    List<Application> getPassengerApp();
    List<PassengerApplication> getAPassengerApp();
    List<PassengerApplicationDTO> getdto();
}
