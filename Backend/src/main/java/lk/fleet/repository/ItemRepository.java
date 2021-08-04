package lk.fleet.repository;

import lk.fleet.entity.ItemApplication;
import lk.fleet.entity.Items;
import org.springframework.data.jpa.repository.JpaRepository;
//Gayan//
public interface ItemRepository extends JpaRepository<ItemApplication,String> {
    Items getItemsById(String itemID);
}
