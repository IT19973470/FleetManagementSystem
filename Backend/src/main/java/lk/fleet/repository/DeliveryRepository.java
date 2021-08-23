package lk.fleet.repository;

import lk.fleet.entity.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DeliveryRepository extends JpaRepository<Delivery, String> {

    @Query(value = "from Delivery order by deliveryDateTime desc")
    List<Delivery> getAllDeliveriesDesc();

}
