package lk.fleet.service;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.Application;

import java.util.List;

public interface ApplicationService {
    ApplicationDTO updateApplication(String aplicationID, Application application);

    boolean deleteApplication(String aplicationID);

    List<ApplicationDTO> getApprovedApplications(String type);

    List<ApplicationDTO> getApprovedApplicationsByDestination(String destination, String type);
    //List<ApplicationDTO> getdto();

}