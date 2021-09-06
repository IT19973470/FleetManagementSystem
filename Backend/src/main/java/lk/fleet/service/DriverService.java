package lk.fleet.service;

import lk.fleet.entity.Driver;

import java.util.List;

public interface DriverService {

    Object addDriver(Driver driver);

    Object updateDriver(String driverID, Driver driver);

    boolean deleteDriver(String driverID);

    Object getDriver();
}
