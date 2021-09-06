package lk.fleet.service;

import lk.fleet.dto.DriverDTO;
import lk.fleet.entity.Driver;

import java.util.List;

public interface DriverService {

    Object addDriver(Driver driver);

    Object updateDriver(String driverID, Driver driver);

    boolean deleteDriver(String driverID);

    List<DriverDTO> getDrivers();
}
