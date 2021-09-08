package lk.fleet.service.impl;

import lk.fleet.dto.TVProgramDTO;
import lk.fleet.entity.TVProgram;
import lk.fleet.repository.TVProgramRepository;
import lk.fleet.service.TVProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TVProgramServiceImpl implements TVProgramService {

    @Autowired
    private TVProgramRepository tvProgramRepository;

    @Override
    public TVProgramDTO addTVProgram(TVProgram tvProgram) {
        return new TVProgramDTO(tvProgramRepository.save(tvProgram));
    }

    @Override
    public TVProgramDTO updateTVProgram(String programID, TVProgram tvProgram) {
        Optional<TVProgram> optionalTVProgram = tvProgramRepository.findById(programID);
        if(optionalTVProgram.isPresent()){
            TVProgram tvProgramObj = optionalTVProgram.get();
            tvProgramObj.setProgramName(tvProgram.getProgramName());
            tvProgramObj.setEndingDate(tvProgram.getEndingDate());
            return new TVProgramDTO(tvProgramRepository.save(tvProgramObj));
        }
        return null;
    }

    @Override
    public boolean deleteTVProgram(String programID) {
        tvProgramRepository.deleteById(programID);
        return true;
    }

    public List<TVProgramDTO> getTvProgram() {
        List<TVProgramDTO> tvProgramDTOS =new ArrayList<>();
        List<TVProgram> tvPrograms =tvProgramRepository.findAll();
        for(TVProgram tvProgram: tvPrograms){
            tvProgramDTOS.add(new TVProgramDTO(tvProgram));
        }
        return tvProgramDTOS;
    }

}
