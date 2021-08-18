package lk.fleet.service.impl;

import lk.fleet.dto.UserAccountDTO;
import lk.fleet.entity.UserAccount;
import lk.fleet.repository.UserAccountRepository;
import lk.fleet.service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
public class UserAccountServiceImpl implements UserAccountService {

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Override
    public UserAccountDTO addUserAccount(UserAccount userAccount) {
        LocalDateTime localDateTime = LocalDateTime.now();//current date
        userAccount.setEmployeeID(userAccount.getAccountType() + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
        return new UserAccountDTO(userAccountRepository.save(userAccount));
    }

    @Override
    public UserAccountDTO updateUserAccount(String employeeID, UserAccount userAccount) {
        Optional<UserAccount> optionalUserAccount = userAccountRepository.findById(employeeID);
        if(optionalUserAccount.isPresent()){
            UserAccount userAccountObj = optionalUserAccount.get();
            userAccountObj.setAccountType(userAccount.getAccountType());
            userAccountObj.setName(userAccount.getName());
            userAccountObj.setAddress(userAccount.getAddress());
            userAccountObj.setContactNo(userAccount.getContactNo());
            userAccountObj.setEmail(userAccount.getEmail());

            return new UserAccountDTO(userAccountRepository.save(userAccountObj));
        }

        return null;
    }

    @Override
    public boolean deleteUserAccount(String employeeID) {
        userAccountRepository.deleteById(employeeID);
        return true;
    }
}
