package lk.fleet.service.impl;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.DriverDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.dto.VehicleDTO;
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
    private PassengerPassengerApplicationRepository passengerPassengerApplicationRepository;

    @Override
    public ApplicationDTO updateApplication(String aplicationID, Application application) {
        Optional<Application> applicationOptional = applicationRepository.findById(aplicationID);
        if (applicationOptional.isPresent()) {
            Application applicationobj = applicationOptional.get();
            applicationobj.setApproval(application.isApproval());
            applicationobj.setArrivaleDate(application.getArrivaleDate());
            applicationobj.setDepatureDate(application.getDepatureDate());
            applicationobj.setDestination(application.getDestination());
            applicationobj.setReason(application.getReason());
            applicationobj.setVehicleType(application.getVehicleType());

            return new ApplicationDTO(applicationRepository.save(applicationobj));
        }
        return null;
    }

    @Override
    public boolean deleteApplication(String aplicationID) {
        applicationRepository.deleteById(aplicationID);
        return true;
    }

    //Transport Manager - Start
    @Override
    public List<ApplicationDTO> getApprovedApplications(String type) {
        List<Application> applicationList = applicationRepository.getApplicationsByApprovalAndTypeOrderByDepatureDateDesc(true, type);
        return setApprovedApplications(applicationList, type);
    }

    @Override
    public List<ApplicationDTO> getApprovedApplicationsByDestination(String destination, String type) {
        List<Application> applicationList = applicationRepository.getApplicationsByApprovalAndDestinationAndTypeOrderByDepatureDateDesc(true, destination, type);
        return setApprovedApplications(applicationList, type);
    }

    @Override
    public List<ApplicationDTO> getApprovedApplicationsByPassenger(String passengerId) {
        List<PassengerPassengerApplication> allByPassengerPassengerId = passengerPassengerApplicationRepository.getAllByPassengerPassengerId(passengerId);
        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        for (PassengerPassengerApplication passengerPassengerApplication : allByPassengerPassengerId) {
            applicationDTOS.add(new ApplicationDTO(passengerPassengerApplication.getPassengerApplication().getApplication()));
        }

        return applicationDTOS;
    }

    private List<ApplicationDTO> setApprovedApplications(List<Application> applicationList, String type) {
        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        for (Application application : applicationList) {
            ApplicationDTO applicationDTO = new ApplicationDTO(application);
            if (type.equals("Passenger")) {

            } else if (type.equals("Item")) {

            } else if (type.equals("PassengerItem")) {

            }
            if (application.getBookingApplication() != null) {
                applicationDTO.setVehicle(new VehicleDTO(application.getBookingApplication().getBooking().getShift().getDriverVehicle().getVehicle()));
                applicationDTO.setDriver(new DriverDTO(application.getBookingApplication().getBooking().getShift().getDriverVehicle().getDriver()));
            }
            applicationDTOS.add(applicationDTO);
        }
        return applicationDTOS;
    }
    //Transport Manager - End

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
