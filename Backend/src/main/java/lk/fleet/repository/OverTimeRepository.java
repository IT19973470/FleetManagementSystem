package lk.fleet.repository;

import lk.fleet.entity.OverTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OverTimeRepository extends JpaRepository<OverTime, String> {

    OverTime getOverTimeByOverTimeID(String overTimeID);

}
