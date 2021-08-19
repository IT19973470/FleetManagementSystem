package lk.fleet.repository;

import lk.fleet.entity.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, String> {

    UserAccount findAllByEmailAndPasswordAndApproved(String email, String password, boolean approved);

}
