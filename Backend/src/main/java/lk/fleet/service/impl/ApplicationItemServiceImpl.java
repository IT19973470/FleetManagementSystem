package lk.fleet.service.impl;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.entity.Application;
import lk.fleet.entity.ItemItemApplication;
import lk.fleet.entity.ItemItemApplicationPK;
import lk.fleet.repository.*;
import lk.fleet.service.ApplicationItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
    @Autowired
    PassengerApplicationRepository passengerApplicationRepository;


    @Override
    public ItemItemApplication addItemItemApplication(ItemItemApplication itemItemApplication) {
        itemRepository.save(itemItemApplication.getItem());
        applicationRepository.save(itemItemApplication.getItemApplication().getApplication());
        itemItemApplication.getItemApplication().setItemApplicationId(itemItemApplication.getItemApplication().getApplication().getApplicationID());
        itemApplicationRepository.save(itemItemApplication.getItemApplication());
        itemItemApplication.setItemItemApplicationId(new ItemItemApplicationPK(itemItemApplication.getItem().getItemID(),itemItemApplication.getItemApplication().getItemApplicationId()));


        return itemItemApplicationRepository.save(itemItemApplication);
    }





}
