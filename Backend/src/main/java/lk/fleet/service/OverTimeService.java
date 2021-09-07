package lk.fleet.service;

import lk.fleet.dto.OverTimeDTO;
import lk.fleet.entity.OverTime;

public interface OverTimeService {
    Object addOT(OverTime overTime);

    OverTimeDTO updateOT(String overTimeID, OverTime overTime);

    boolean deleteOT(String overTimeID);

    Object getOT();
}
