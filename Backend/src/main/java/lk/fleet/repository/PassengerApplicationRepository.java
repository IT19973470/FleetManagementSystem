package lk.fleet.repository;

import lk.fleet.entity.PassengerApplication;
import org.springframework.data.jpa.repository.JpaRepository;
//Gayan//
public interface PassengerApplicationRepository extends JpaRepository<PassengerApplication,String> {
//    PassengerApplication getPassengerApplicationById(String requestId);
}
