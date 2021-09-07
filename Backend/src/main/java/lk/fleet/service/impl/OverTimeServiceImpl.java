package lk.fleet.service.impl;

import lk.fleet.dto.OverTimeDTO;
import lk.fleet.dto.UserAccountDTO;
import lk.fleet.entity.OverTime;
import lk.fleet.entity.UserAccount;
import lk.fleet.repository.OverTimeRepository;
import lk.fleet.service.OverTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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
    public OverTimeDTO updateOT(long overTimeID, OverTime overTime) {
        Optional<OverTime> optionalOverTime = overTimeRepository.findById(overTimeID);
        if (optionalOverTime.isPresent()){
            OverTime overTime1 = optionalOverTime.get();
            overTime1.setOtDate(overTime.getOtDate());
            overTime1.setNoOfShifts(overTime.getNoOfShifts());
            overTime1.setStartTime(overTime.getStartTime());
            overTime1.setEndTime(overTime.getEndTime());
            overTime1.setApproval(overTime.isApproval());

            return new OverTimeDTO(overTimeRepository.save(overTime1));
        }
        return null;
    }

    @Override
    public boolean deleteOT(long overTimeID) {
        overTimeRepository.deleteById(overTimeID);
        return true;
    }

    @Override
    public Object getOT() {
        List<OverTime> overTimes = overTimeRepository.findAll();
        List<OverTimeDTO> overTimeDTOS = new ArrayList<>();

        for(OverTime overTime : overTimes){
            overTimeDTOS.add(new OverTimeDTO(overTime));
        }

        return overTimeDTOS;
    }
}
