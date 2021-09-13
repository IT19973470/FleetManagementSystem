package lk.fleet.service;

import lk.fleet.dto.ShiftDTO;
import lk.fleet.entity.Shift;

public interface ShiftService {
    ShiftDTO addShift(Shift shift);

    ShiftDTO updateShift(String shiftId, Shift shift);

    boolean deleteShift(String shiftId);

    Object getShift();

//    Object getShiftByDriverID(String driverId);
}
