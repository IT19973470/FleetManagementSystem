package lk.fleet.service.impl;
import lk.fleet.dto.ApplicationDTO;
import lk.fleet.entity.Application;
import lk.fleet.entity.PassengerApplication;
import lk.fleet.repository.ApplicationRepository;
import lk.fleet.repository.PassengerApplicationRepository;
import lk.fleet.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
        passengerApplication.setApplication(passengerApplication.getApplication());
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
}
