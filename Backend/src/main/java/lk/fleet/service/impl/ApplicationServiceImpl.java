package lk.fleet.service.impl;
import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.Application;
import lk.fleet.entity.PassengerApplication;
import lk.fleet.repository.ApplicationRepository;
import lk.fleet.repository.PassengerApplicationRepository;
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

    @Override
    public Application addApplication(Application application) {
           return    applicationRepository.save(application); //Jarawa epaa
    }

    @Override
    public PassengerApplication addPassengerApplication(PassengerApplication passengerApplication) {
        passengerApplication.setPassengerApplicationID(passengerApplication.getApplication().getApplicationID());
            applicationRepository.save(passengerApplication.getApplication());
        return passengerApplicationRepository.save(passengerApplication);
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
        for(PassengerApplication passengerApplication: passengerApplications){
            passengerApplicationDTOS.add(new PassengerApplicationDTO(passengerApplication));
        }

        return passengerApplicationDTOS;
    }

}
