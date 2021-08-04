package lk.fleet.repository;

import lk.fleet.entity.MeterDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeterDetailsRepository extends JpaRepository<MeterDetails, String> {
    MeterDetails getMeterDetailsByMeterID(String meterID);
}
