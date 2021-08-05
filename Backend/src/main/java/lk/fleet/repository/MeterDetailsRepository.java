package lk.fleet.repository;

import lk.fleet.entity.MeterDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeterDetailsRepository extends JpaRepository<MeterDetail, String> {
    MeterDetail getMeterDetailsByMeterID(String meterID);
}
