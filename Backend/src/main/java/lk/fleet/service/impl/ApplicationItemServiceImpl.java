package lk.fleet.service.impl;

import lk.fleet.entity.ItemItemApplication;
import lk.fleet.entity.ItemItemApplicationPK;
import lk.fleet.repository.ApplicationRepository;
import lk.fleet.repository.ItemApplicationRepository;
import lk.fleet.repository.ItemItemApplicationRepository;
import lk.fleet.repository.ItemRepository;
import lk.fleet.service.ApplicationItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationItemServiceImpl implements ApplicationItemService {

    @Autowired
    ApplicationRepository applicationRepository;
    @Autowired
    ItemApplicationRepository itemApplicationRepository;
    @Autowired
    ItemRepository itemRepository;
    @Autowired
    ItemItemApplicationRepository itemItemApplicationRepository;


    @Override
    public ItemItemApplication addItemApplication(ItemItemApplication itemItemApplication) {
        itemRepository.save(itemItemApplication.getItem());
        applicationRepository.save(itemItemApplication.getItemApplication().getApplication());
        itemItemApplication.getItemApplication().setItemApplicationId(itemItemApplication.getItemApplication().getApplication().getApplicationID());
        itemApplicationRepository.save(itemItemApplication.getItemApplication());
        itemItemApplication.setItemItemApplicationId(new ItemItemApplicationPK(itemItemApplication.getItem().getItemID(),itemItemApplication.getItemApplication().getItemApplicationId()));


        return itemItemApplicationRepository.save(itemItemApplication);
    }
}
