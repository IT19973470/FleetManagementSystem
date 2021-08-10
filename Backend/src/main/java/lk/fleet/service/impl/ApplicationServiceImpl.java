package lk.fleet.service.impl;


import lk.fleet.entity.Application;
import lk.fleet.repository.ApplicationRepository;
import lk.fleet.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationServiceImpl implements ApplicationService {
    @Autowired
    private ApplicationRepository applicationRepository;

    @Override
    public Application addApplication(Application application) {
        return applicationRepository.save(application);
    }
}
