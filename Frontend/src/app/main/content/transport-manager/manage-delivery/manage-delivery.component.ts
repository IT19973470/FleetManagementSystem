import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../../../_service/navbar.service";

@Component({
  selector: 'app-manage-delivery',
  templateUrl: './manage-delivery.component.html',
  styleUrls: ['./manage-delivery.component.css']
})
export class ManageDeliveryComponent implements OnInit {

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
    this.navBarService.navTopic.next('Manage Deliveries');
  }

  onSubmit() {

  }
}
