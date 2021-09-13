package lk.fleet.service.impl;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.Application;
import lk.fleet.entity.PassengerApplication;
import lk.fleet.entity.PassengerPassengerApplication;
import lk.fleet.repository.*;
import lk.fleet.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ApplicationServiceimpl implements ApplicationService {
    @Autowired
    private ApplicationRepository applicationRepository;
    @Autowired
    private PassengerApplicationRepository passengerApplicationRepository;
    @Autowired
    private PassengerRepository passengerRepository;
    @Autowired
    private PassengerPassengerApplicationRepository passengerPassengerApplicationRepository;
    @Autowired
    private ItemItemApplicationRepository itemItemApplicationRepository;

    @Override
    public ApplicationDTO updateApplication(String aplicationID, Application application) {
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
    public boolean deleteApplication(String aplicationID) {

        applicationRepository.deleteById(aplicationID);
        return true;
    }

//    public List<PassengerApplicationDTO> getdto() {
//      //  List<Application> applicationDTOS = applicationRepository.findAll();
//        List<PassengerApplication> passengerApplications=passengerApplicationRepository.findAll();
//        List<ApplicationDTO> applicationDTOS1=new ArrayList<>();
////        for(Application application: applicationDTOS){
////            applicationDTOS1.add(new ApplicationDTO(application));
////        }
//        for(PassengerApplication passengerApplication: passengerApplications){
//            applicationDTOS1.add(new ApplicationDTO(passengerApplication));
//        }
//
//        return applicationDTOS1;
//    }
}
