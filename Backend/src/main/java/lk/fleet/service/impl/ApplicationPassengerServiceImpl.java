package lk.fleet.service.impl;
import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.*;
import lk.fleet.repository.*;
import lk.fleet.service.ApplicationPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ApplicationPassengerServiceImpl implements ApplicationPassengerService {
    @Autowired
    private ApplicationRepository applicationRepository;
    @Autowired
    private PassengerApplicationRepository passengerApplicationRepository;
    @Autowired
    private PassengerRepository passengerRepository;
    @Autowired
    private PassengerPassengerApplicationRepository passengerPassengerApplicationRepository;
    @Autowired
    private UserAccountRepository userAccountRepository;
    @Autowired
    private BookingApplicationRepository bookingApplicationRepository;

//    @Override
//    public Application addApplication(Application application) {
//        PassengerApplication passengerApplication=new PassengerApplication();
//        passengerApplication.setPassengerApplicationID(application.getApplicationID());
//        passengerApplicationRepository.save(passengerApplication);
//           return    applicationRepository.save(application); //Jarawa epaa
//    }
//
//    @Override
//    public PassengerApplication addPassengerApplication(PassengerApplication passengerApplication) {
//        passengerApplication.setPassengerApplicationID(passengerApplication.getApplication().getApplicationID());
//            applicationRepository.save(passengerApplication.getApplication());
//        return passengerApplicationRepository.save(passengerApplication);
//    }

    @Override
    public Passenger addPassenger(Passenger passenger) {
        passenger.setPassengerId(passenger.getUserAccount().getEmployeeID());
        userAccountRepository.save(passenger.getUserAccount());

        return passengerRepository.save(passenger);
    }

    @Override
    public PassengerPassengerApplication addPassengerPassengerApplication(PassengerPassengerApplication passengerPassengerApplication) {

        applicationRepository.save(passengerPassengerApplication.getPassengerApplication().getApplication());
        passengerPassengerApplication.getPassengerApplication().setPassengerApplicationID(passengerPassengerApplication.getPassengerApplication().getApplication().getApplicationID());
        passengerApplicationRepository.save(passengerPassengerApplication.getPassengerApplication());
        passengerPassengerApplication.setPassengerPassengerApplicationId(new PassengerPassengerApplicationPK(passengerPassengerApplication.getPassengerApplication().getPassengerApplicationID(),passengerPassengerApplication.getPassenger().getPassengerId()));


        return passengerPassengerApplicationRepository.save(passengerPassengerApplication);
    }

    @Override
    public List<Application> getPassengerApp() {

        return applicationRepository.findAll();
    }

    @Override
    public List<PassengerApplication> getAPassengerApp() {
        return passengerApplicationRepository.findAll();
    }

    @Override
    public List<PassengerApplicationDTO> getdto() {
        List<BookingApplication> bookingApplications = bookingApplicationRepository.findAll();
        List<PassengerApplicationDTO> passengerApplicationDTOS=new ArrayList<>();
        for(BookingApplication bookingApplication: bookingApplications){
            passengerApplicationDTOS.add(new PassengerApplicationDTO(bookingApplication));
        }

        return passengerApplicationDTOS;
    }

}
