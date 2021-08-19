package lk.fleet.service;

import lk.fleet.dto.UserAccountDTO;
import lk.fleet.entity.UserAccount;

public interface UserAccountService {

    UserAccountDTO addUserAccount(UserAccount userAccount);

    UserAccountDTO updateUserAccount(String employeeID, UserAccount userAccount);

    boolean deleteUserAccount(String employeeID);

    UserAccountDTO login(UserAccount userAccount);
}
