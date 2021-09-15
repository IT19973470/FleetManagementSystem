package lk.fleet.repository;

import lk.fleet.entity.VipMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VipMemberRepository extends JpaRepository<VipMember,String> {

    List<VipMember> getVipMemberByVipMemberId(String vipMemberId);

//    VipMember getVipMemberByVipMemberId(String vipMemberId);

}
