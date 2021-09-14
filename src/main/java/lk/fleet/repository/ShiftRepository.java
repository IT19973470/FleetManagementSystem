package lk.fleet.repository;

import lk.fleet.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ShiftRepository extends JpaRepository<Shift, String> {

    @Query(value = "from Shift where driverVehicle.driver.driverID=?1 order by shiftDate desc")
    List<Shift> getDriverShiftsByDriverId(String driverId);

    @Query(value = "from Shift order by shiftDate desc")
    List<Shift> getDriverShifts();

//    List<Object> getLastShift(String driverId);
}
