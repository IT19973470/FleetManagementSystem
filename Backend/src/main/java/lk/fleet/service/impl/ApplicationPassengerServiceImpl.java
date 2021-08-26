package lk.fleet.service.impl;
import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.DeliveryDTO;
import lk.fleet.dto.PassengerAppDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.*;
import lk.fleet.repository.*;
import lk.fleet.service.ApplicationPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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

    @Override
    public ApplicationDTO addApplication(Application application) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        application.setApplicationID("App" + dateTime);

        PassengerApplication passengerApplication =application.getPassengerApplication();
        passengerApplication.setPassengerApplicationID("PassApp" + dateTime);
        passengerApplication.setApplication(application);

        int count=0;
        for(PassengerPassengerApplication passengerPassengerApplication: application.getPassengerApplication().getPassengerPassengerApplications()){
          passengerPassengerApplication.setPassengerPassengerApplicationId(new PassengerPassengerApplicationPK(application.getPassengerApplication().getPassengerApplicationID(),passengerPassengerApplication.getPassenger().getPassengerId()));


        }

//        application.getPassengerApplication().setPassengerApplicationID("Pass" + 0 + dateTime);
//        PassengerApplication passengerApplication = application.getPassengerApplication();
//
////           PassengerApplication passengerApplication=new PassengerApplication();
//          passengerApplication.setPassengerApplicationID(application.getApplicationID());
////          passengerApplicationRepository.save(passengerApplication);
////           passengerApplication.setApplication(application);
////        application.getPassengerApplications()(application.getApplicationID());
////        passengerApplicationRepository.save(passengerApplication);

           return   new ApplicationDTO(applicationRepository.save(application)); //Jarawa epaa
    }



    public PassengerAppDTO addPassApp(PassengerApplication passengerApplication){
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        passengerApplication.setPassengerApplicationID("DelPa" + 0 + dateTime);


        return new PassengerAppDTO(passengerApplicationRepository.save(passengerApplication));
    }


    @Override
    public PassengerPassengerApplication addPassengerpassenger(PassengerPassengerApplication passengerPassengerApplication) {
       // passengerPassengerApplication.setPassengerPassengerApplicationId(passengerPassengerApplication.getPassengerPassengerApplicationId());
        return passengerPassengerApplicationRepository.save(passengerPassengerApplication);
    }
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
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        applicationRepository.save(passengerPassengerApplication.getPassengerApplication().getApplication());
        passengerPassengerApplication.getPassengerApplication().setPassengerApplicationID("Pass" + 0 + dateTime);
        passengerApplicationRepository.save(passengerPassengerApplication.getPassengerApplication());
        passengerPassengerApplication.setPassengerPassengerApplicationId(new PassengerPassengerApplicationPK(passengerPassengerApplication.getPassengerApplication().getPassengerApplicationID(),passengerPassengerApplication.getPassenger().getPassengerId()));

//        int count = 0;
//        for (Passenger passenger : passengerPassengerApplication.getPassengers()) {
//            passengerPassengerApplication.setPassengerPassengerApplicationId(new PassengerPassengerApplicationPK(passengerPassengerApplication.getPassengerApplication().getPassengerApplicationID(),passenger.getPassengerId()));
//            passengerPassengerApplication.setPassenger(passenger);
//        }

        return passengerPassengerApplicationRepository.save(passengerPassengerApplication);
    }

    @Override
    public List<ApplicationDTO> getPassengerApp() {

        List<ApplicationDTO> applicationDTOS =new ArrayList<>();
        List<Application> applications =applicationRepository.findAll();
        for(Application application: applications){
            applicationDTOS.add(new ApplicationDTO(application));
        }
        return applicationDTOS;
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
