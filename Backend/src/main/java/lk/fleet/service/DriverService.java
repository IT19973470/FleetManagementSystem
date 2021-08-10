package lk.fleet.service;

import lk.fleet.entity.Driver;

import java.util.List;

public interface DriverService {
    Driver addDriver(Driver driver);

    List<Driver> getAllDrivers();

//    Driver getDriverByDriverID(String driverID);

    Driver updateDriver(Driver driver);

    Driver deleteDriver(Driver driver);
}
