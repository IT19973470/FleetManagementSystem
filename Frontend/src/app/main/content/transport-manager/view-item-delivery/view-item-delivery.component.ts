import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-item-delivery',
  templateUrl: './view-item-delivery.component.html',
  styleUrls: ['./view-item-delivery.component.css']
})
export class ViewItemDeliveryComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  constructor() {
  }

  ngOnInit(): void {

  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

}
