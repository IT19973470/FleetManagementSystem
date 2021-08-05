package lk.fleet.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.Set;

@Entity
public class VipMember {
    @Id
    private String vipMemberId;
    private String firstname;
    private String lastname;
    private LocalDate timeperiod;
    private String purpuse;


    public String getVipMemberId() {
        return vipMemberId;
    }

    public void setVipMemberId(String vipMemberId) {
        this.vipMemberId = vipMemberId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public LocalDate getTimeperiod() {
        return timeperiod;
    }

    public void setTimeperiod(LocalDate timeperiod) {
        this.timeperiod = timeperiod;
    }

    public String getPurpuse() {
        return purpuse;
    }

    public void setPurpuse(String purpuse) {
        this.purpuse = purpuse;
    }




}
