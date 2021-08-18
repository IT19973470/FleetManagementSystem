package lk.fleet.service.impl;


import lk.fleet.dto.VehicleDTO;
import lk.fleet.dto.VipMemberDTO;
import lk.fleet.entity.Vehicle;
import lk.fleet.entity.VipMember;
import lk.fleet.repository.VipMemberRepository;
import lk.fleet.service.VipMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VipMemberImpl implements VipMemberService {

    @Autowired
    private VipMemberRepository vipMemberRepository;


    @Override
    public VipMemberDTO addVipMember(VipMember vipMember){
        return new VipMemberDTO(vipMemberRepository.save(vipMember));
    }

    @Override
    public VipMemberDTO updateVipMember(String vipMemberId, VipMember vipMember) {
        Optional<VipMember> optionalVipMember = vipMemberRepository.findById(vipMemberId);
        if (optionalVipMember.isPresent()) {
            VipMember vipMemberObj = optionalVipMember.get();
            vipMemberObj.setVipMemberId(vipMember.getVipMemberId());
            vipMemberObj.setFirstName(vipMember.getFirstName());
            vipMemberObj.setLastName(vipMember.getLastName());
            vipMemberObj.setContactNumber(vipMember.getContactNumber());
            vipMemberObj.setAddress(vipMember.getAddress());
            vipMemberObj.setPosition(vipMember.getPosition());

            return new VipMemberDTO(vipMemberRepository.save(vipMemberObj));
        }
        return null;
    }

}
