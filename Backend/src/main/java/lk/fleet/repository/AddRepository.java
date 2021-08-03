package lk.fleet.repository;

import lk.fleet.entity.ItemItemApplication;
import lk.fleet.entity.ItemItemApplicationPk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddRepository extends JpaRepository<ItemItemApplication, ItemItemApplicationPk> {

}
