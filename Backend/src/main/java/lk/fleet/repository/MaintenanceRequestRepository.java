package lk.fleet.repository;

import lk.fleet.entity.MaintenanceRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaintenanceRequestRepository extends JpaRepository<MaintenanceRequest, String> {

    MaintenanceRequest getMaintenanceRequestByMaintenanceRequestID(String maintenanceRequestID);
}
