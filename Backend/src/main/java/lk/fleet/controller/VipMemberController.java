package lk.fleet.controller;

import lk.fleet.entity.Vehicle;
import lk.fleet.entity.VipMember;
import lk.fleet.service.VipMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleet/" + "vipMember")
public class VipMemberController {

    @Autowired
    private VipMemberService vipMemberService;

    @PostMapping(value = "/addVipMember")
    public ResponseEntity addVipMember(@RequestBody VipMember vipMember){
        return ResponseEntity.ok(vipMemberService.addVipMember(vipMember));
    }

    @PutMapping(value = "/updateVipMember/{vipMemberId}")
    public ResponseEntity updateVipMember(@PathVariable String vipMemberId, @RequestBody VipMember vipMember){
        return ResponseEntity.ok(vipMemberService.updateVipMember(vipMemberId, vipMember));
    }
}
