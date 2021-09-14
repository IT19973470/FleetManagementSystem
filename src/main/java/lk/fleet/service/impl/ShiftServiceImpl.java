package lk.fleet.service.impl;


import lk.fleet.dto.OverTimeDTO;
import lk.fleet.dto.ShiftDTO;
import lk.fleet.entity.OverTime;
import lk.fleet.entity.Shift;
import lk.fleet.repository.ShiftRepository;
import lk.fleet.service.ShiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ShiftServiceImpl implements ShiftService {

    @Autowired
    private ShiftRepository shiftRepository;

    @Override
    public ShiftDTO addShift(Shift shift) {
        return new ShiftDTO(shiftRepository.save(shift));
    }

    @Override
    public ShiftDTO updateShift(String shiftId, Shift shift) {
        Optional<Shift> optionalShift = shiftRepository.findById(shiftId);
        if(optionalShift.isPresent()) {
            Shift shiftObject = optionalShift.get();
            shiftObject.setAttendance(shift.isAttendance());
            shiftObject.setDriverVehicle(shift.getDriverVehicle());

            return new ShiftDTO(shiftRepository.save(shiftObject));
        }
        return null;
    }

    @Override
    public boolean deleteShift(String shiftId) {
        shiftRepository.deleteById(shiftId);
        return true;
    }

    @Override
    public Object getShift() {
        return null;
    }

//    @Override
//    public ShiftDTO getShiftByDriverID(String driverId) {
//        Shift shift = shiftRepository.getLastShift(driverId).get(0);
//        return new ShiftDTO(shift);
//    }
}
