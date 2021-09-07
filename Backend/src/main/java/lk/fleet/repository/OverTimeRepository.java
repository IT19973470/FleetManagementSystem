package lk.fleet.repository;

import lk.fleet.entity.OverTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OverTimeRepository extends JpaRepository<OverTime, Long> {

//    OverTime getOverTimeByOverTimeID(String overTimeID);

    @Query(value = "from OverTime where driver.driverID=?1 and otDate=curdate()")
    OverTime getOverTimeNow(String driverId);

}
