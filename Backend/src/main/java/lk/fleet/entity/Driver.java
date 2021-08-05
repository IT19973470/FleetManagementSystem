package lk.fleet.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Driver {

    @Id
    private String driverID;

    @OneToOne
    private UserAccount userAccount;

    public String getDriverID() {
        return driverID;
    }

    public void setDriverID(String driverID) {
        this.driverID = driverID;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }
}
