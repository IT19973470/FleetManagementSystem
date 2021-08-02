package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class VipMember {
    @Id
    private String VipMemberId;
    private String name;
    private String purpuse;

    public String getVipMemberId() {
        return VipMemberId;
    }

    public void setVipMemberId(String vipMemberId) {
        VipMemberId = vipMemberId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPurpuse() {
        return purpuse;
    }

    public void setPurpuse(String purpuse) {
        this.purpuse = purpuse;
    }
}
