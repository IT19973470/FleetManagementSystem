package lk.fleet.repository;

import lk.fleet.entity.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, String> {

    UserAccount findAllByUsernameAndPasswordAndApproved(String username, String password, boolean approved);

}
