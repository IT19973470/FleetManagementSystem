package lk.fleet.repository;

import lk.fleet.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DriverRepository extends JpaRepository<Driver,String> {

    Driver getDriverByDriverID(String driverID);

}
