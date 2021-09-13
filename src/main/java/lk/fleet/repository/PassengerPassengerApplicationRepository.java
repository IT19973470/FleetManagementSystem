package lk.fleet.repository;

import lk.fleet.entity.PassengerPassengerApplication;
import lk.fleet.entity.PassengerPassengerApplicationPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

//Gayan//
public interface PassengerPassengerApplicationRepository extends JpaRepository<PassengerPassengerApplication, PassengerPassengerApplicationPK> {

//    @Query(value = "from PassengerPassengerApplication where passengerPassengerApplicationId=?1 ")
//    PassengerPassengerApplicationPK deleteById(String passengerApplicationID, String passengerID);
}
