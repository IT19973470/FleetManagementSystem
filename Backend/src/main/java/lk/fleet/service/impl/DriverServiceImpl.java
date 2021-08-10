package lk.fleet.service.impl;

import lk.fleet.entity.Driver;
import lk.fleet.repository.DriverRepository;
import lk.fleet.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepository driverRepository;

    @Override
    public Driver addDriver(Driver driver) {
        return driverRepository.save(driver);
    }

    @Override
    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

//    @Override
//    public Driver getDriverByDriverID(String driverID) {
//        return driverRepository.getDriverNameUsingdriverID(driverID);
//    }

    @Override
    public Driver updateDriver(Driver driver) {
//        Check whether customer Available
//        Optional<Driver> driver1 = driverRepository.findById(driver.getDriverID());
//        if(driver1.isPresent()){
//            Driver driver2 = driver1.get();
//            driver2.setUserAccount(driver.getUserAccount());
//            driver2.setDriverID(driver.getDriverID());
//            return driverRepository.save(driver2);
//        }
        //If if condition true below codes do not run
        return null;
    }

    @Override
    public Driver deleteDriver(Driver driver) {
        return null;
    }
}
