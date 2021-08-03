package lk.fleet.repository;

import lk.fleet.entity.ItemApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<ItemApplication,String> {
}
