package lk.fleet.service.impl;
import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.*;
import lk.fleet.repository.*;
import lk.fleet.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ApplicationServiceImpl implements ApplicationService {
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
    public PassengerPassengerApplication addpassenerApplicationpassengerPassengerApplicationapplication(PassengerPassengerApplication passengerPassengerApplication) {


        passengerPassengerApplication.getPassengerApplication().setPassengerApplicationID(passengerPassengerApplication.getPassengerApplication().getApplication().getApplicationID());
        applicationRepository.save(passengerPassengerApplication.getPassengerApplication().getApplication());
        passengerApplicationRepository.save(passengerPassengerApplication.getPassengerApplication());
        passengerPassengerApplication.setPassengerPassengerApplicationId(new PassengerPassengerApplicationPK(passengerPassengerApplication.getPassengerApplication().getApplication().getApplicationID(),passengerPassengerApplication.getPassenger().getPassengerId()));


        return passengerPassengerApplicationRepository.save(passengerPassengerApplication);
    }

    @Override
    public ApplicationDTO updateApplication(String aplicationID,Application application) {
        Optional<Application> applicationOptional = applicationRepository.findById(aplicationID);
        if(applicationOptional.isPresent()){
            Application applicationobj=applicationOptional.get();
            applicationobj.setApproval(application.isApproval());
            applicationobj.setArrivaleDate(application.getArrivaleDate());
            applicationobj.setDepatureDate(application.getDepatureDate());
            applicationobj.setDestination(application.getDestination());
            applicationobj.setReason(application.getReason());
            applicationobj.setVehicleType(application.getVehicleType());

            return  new ApplicationDTO(applicationRepository.save(applicationobj));
        }
        return null;
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
        List<PassengerApplication> passengerApplications = passengerApplicationRepository.findAll();
        List<PassengerApplicationDTO> passengerApplicationDTOS=new ArrayList<>();
        for(PassengerApplication passengerApplication1: passengerApplications){
            passengerApplicationDTOS.add(new PassengerApplicationDTO(passengerApplication1));
        }

        return passengerApplicationDTOS;
    }

}
