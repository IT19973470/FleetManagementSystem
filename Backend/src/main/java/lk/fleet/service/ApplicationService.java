package lk.fleet.service;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.entity.Application;
import lk.fleet.entity.ItemApplication;
import lk.fleet.entity.PassengerApplication;

public interface ApplicationService {
    Application addApplication(Application application);
    PassengerApplication addPassengerApplication(PassengerApplication application);
    ApplicationDTO updateApplication(String aplicationID, Application application);
}
