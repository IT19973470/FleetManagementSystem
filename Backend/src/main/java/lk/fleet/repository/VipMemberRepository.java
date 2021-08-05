package lk.fleet.repository;

import lk.fleet.entity.VipMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VipMemberRepository extends JpaRepository<VipMember,String> {
//    VipMember getVipMemberByVipMemberId(String vipMemberId);
}
