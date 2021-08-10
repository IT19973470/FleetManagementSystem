package lk.fleet.controller;

import lk.fleet.entity.Application;
import lk.fleet.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value="application")
public class ApplicationController {
    @Autowired
    private  ApplicationService applicationService;


    @PostMapping(value ="/newApplication")
    public Application addApplication(@RequestBody Application application){
        return  applicationService.addApplication(application);
    }
}
