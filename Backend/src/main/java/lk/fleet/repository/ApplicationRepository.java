package lk.fleet.repository;

import lk.fleet.Application;

import org.springframework.data.jpa.repository.JpaRepository;

//Gayan//
public interface ApplicationRepository extends JpaRepository<Application,String> {
    Application getApplicationById(String requestID);
}
