package lk.fleet.repository;

import lk.fleet.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application,String> {
}
