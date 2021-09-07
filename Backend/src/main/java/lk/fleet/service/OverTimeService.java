package lk.fleet.service;

import lk.fleet.dto.DriverDTO;
import lk.fleet.dto.OverTimeDTO;
import lk.fleet.entity.OverTime;

public interface OverTimeService {
    Object addOT(OverTime overTime);

    OverTimeDTO updateOT(long overTimeID, OverTime overTime);

    boolean deleteOT(long overTimeID);

    Object getOT();

    OverTimeDTO getOverTimeByID(long overTimeID);
}
