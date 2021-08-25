package lk.fleet.service;

import lk.fleet.dto.ItamAppDTO;
import lk.fleet.entity.Application;
import lk.fleet.entity.ItemItemApplication;

public interface ApplicationItemService {


    //    PassengerApplication addPassengerApplication(PassengerApplication application);
    ItemItemApplication addItemItemApplication (ItemItemApplication itemApplication);
    ItamAppDTO addItemApplication(Application application);

}
