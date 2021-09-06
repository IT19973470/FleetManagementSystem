package lk.fleet.service.impl;

import lk.fleet.dto.DriverDTO;
import lk.fleet.dto.OverTimeDTO;
import lk.fleet.entity.Driver;
import lk.fleet.entity.OverTime;
import lk.fleet.repository.DriverRepository;
import lk.fleet.repository.UserAccountRepository;
import lk.fleet.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Override
    public Object addDriver(Driver driver) {
        driver.setDriverID(driver.getUserAccount().getEmployeeID());
        userAccountRepository.save(driver.getUserAccount());
        return driverRepository.save(driver);
    }

    @Override
    public Object updateDriver(String driverID, Driver driver) {
        Optional<Driver> optionalDriver = driverRepository.findById(driverID);
        if (optionalDriver.isPresent()){
            Driver driver1 = optionalDriver.get();
            driver1.getUserAccount().setName(driver.getUserAccount().getName());
            driver1.getUserAccount().setAddress(driver.getUserAccount().getAddress());
            driver1.getUserAccount().setDob(driver.getUserAccount().getDob());
            driver1.getUserAccount().setEmail(driver.getUserAccount().getEmail());
            driver1.getUserAccount().setNic(driver.getUserAccount().getNic());
            driver1.getUserAccount().setNameWithInitials(driver.getUserAccount().getNameWithInitials());
            driver1.getUserAccount().setPassword(driver.getUserAccount().getPassword());
            driver1.setLisenseID(driver.getLisenseID());
            driver1.getUserAccount().setApproved(driver.getUserAccount().isApproved());

            userAccountRepository.save(driver1.getUserAccount());
            return new DriverDTO(driverRepository.save(driver1));
        }
        return null;
    }

    @Override
    public boolean deleteDriver(String driverID) {
        driverRepository.deleteById(driverID);
        return true;
    }

    @Override
    public Object getDriver() {
            List<Driver> drivers = driverRepository.findAll();
            List<DriverDTO> driverDTOS = new ArrayList<>();

            for(Driver driver : drivers){
                driverDTOS.add(new DriverDTO(driver));
            }

            return driverDTOS;
        }

}
