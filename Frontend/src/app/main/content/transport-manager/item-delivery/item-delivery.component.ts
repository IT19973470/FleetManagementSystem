import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../../_service/navbar.service";

@Component({
  selector: 'app-item-delivery',
  templateUrl: './item-delivery.component.html',
  styleUrls: ['./item-delivery.component.css']
})
export class ItemDeliveryComponent implements OnInit {

  deliveryDetails = {
    deliveryPersonName: '',
    deliveryPersonNic: '',
    contactNumber: '',
    placeFrom: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: ''
  };

  constructor(private navBarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navBarService.navTopic.next('Item Delivery');
  }

  onSubmit() {

  }

}
