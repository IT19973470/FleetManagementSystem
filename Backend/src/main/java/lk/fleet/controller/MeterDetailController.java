package lk.fleet.controller;

import lk.fleet.entity.MeterDetail;
import lk.fleet.service.MeterDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleet/" + "meterDetail")
public class MeterDetailController {

    @Autowired
    private MeterDetailService meterDetailService;

    @PostMapping(value = "/addMeterDetail")
    public ResponseEntity addMeterDetail(@RequestBody MeterDetail meterDetail) {
        return ResponseEntity.ok(meterDetailService.addMeterDetail(meterDetail));
    }

    @PutMapping(value = "/updateMeterDetail/{meterID}")
    public ResponseEntity updateMeterDetail (@PathVariable String meterID, @RequestBody MeterDetail meterDetail) {
        return ResponseEntity.ok(meterDetailService.updateMeterDetail(meterID, meterDetail));
    }

    @DeleteMapping(value = "/deleteMeterDetail/{meterID}")
    public ResponseEntity deleteMeterDetail (@PathVariable String meterID) {
        return ResponseEntity.ok(meterDetailService.deleteMeterDetail(meterID));
    }


}
