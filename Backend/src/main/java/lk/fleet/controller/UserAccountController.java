package lk.fleet.controller;

import lk.fleet.entity.UserAccount;
import lk.fleet.service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "userAccount")
public class UserAccountController {

    @Autowired
    private UserAccountService userAccountService;

    @PostMapping(value = "/login")
    public ResponseEntity login(@RequestBody UserAccount userAccount){
        return ResponseEntity.ok(userAccountService.login(userAccount));
    }

    @PostMapping(value = "/addUserAccount")
    public ResponseEntity addUserAccount(@RequestBody UserAccount userAccount){
        return ResponseEntity.ok(userAccountService.addUserAccount(userAccount));
    }

    @PutMapping(value = "/updateUserAccount/{employeeID}")
    public ResponseEntity updateUserAccount(@PathVariable String employeeID, @RequestBody UserAccount userAccount){
        return ResponseEntity.ok(userAccountService.updateUserAccount(employeeID, userAccount));
    }

    @DeleteMapping(value = "/deleteUserAccount/{employeeID}")
    public ResponseEntity deleteUserAccount(@PathVariable String employeeID){
        return ResponseEntity.ok(userAccountService.deleteUserAccount(employeeID));
    }
}
