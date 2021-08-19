package lk.fleet.repository;

import lk.fleet.entity.PassengerPassengerApplication;
import lk.fleet.entity.PassengerPassengerApplicationPK;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//Gayan//
public interface PassengerPassengerApplicationRepository extends JpaRepository<PassengerPassengerApplication, PassengerPassengerApplicationPK> {
    
}
