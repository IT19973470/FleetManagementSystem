package lk.fleet.service.impl;

import lk.fleet.dto.DriverDTO;
import lk.fleet.dto.OverTimeDTO;
import lk.fleet.entity.Driver;
import lk.fleet.entity.OverTime;
import lk.fleet.repository.OverTimeRepository;
import lk.fleet.service.OverTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OverTimeServiceImpl implements OverTimeService{

    @Autowired
    private OverTimeRepository overTimeRepository;

    @Override
    public Object addOT(OverTime overTime) {
        return overTimeRepository.save(overTime);
    }

    @Override
    public Object updateOT(String overTimeID, OverTime overTime) {
        Optional<OverTime> optionalOverTime = overTimeRepository.findById(overTimeID);
        if (optionalOverTime.isPresent()){
            OverTime overTime1 = optionalOverTime.get();
            overTime1.setNoOfShifts(overTime.getNoOfShifts());
            overTime1.setStartTime(overTime.getStartTime());
            overTime1.setEndTime(overTime.getEndTime());

            return new OverTimeDTO(overTimeRepository.save(overTime1));
        }
        return null;
    }

    @Override
    public boolean deleteOT(String overTimeID) {
        overTimeRepository.deleteById(overTimeID);
        return true;
    }
}
