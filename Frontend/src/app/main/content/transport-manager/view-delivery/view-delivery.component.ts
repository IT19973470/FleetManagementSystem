import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../../../_service/navbar.service";

@Component({
  selector: 'app-view-delivery',
  templateUrl: './view-delivery.component.html',
  styleUrls: ['./view-delivery.component.css']
})
export class ViewDeliveryComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  constructor(private navBarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navBarService.navTopic.next('View Deliveries');
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }
}
