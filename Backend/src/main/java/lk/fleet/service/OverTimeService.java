package lk.fleet.service;

import lk.fleet.entity.OverTime;

public interface OverTimeService {
    Object addOT(OverTime overTime);

    Object updateOT(String overTimeID, OverTime overTime);

    boolean deleteOT(String overTimeID);
}
