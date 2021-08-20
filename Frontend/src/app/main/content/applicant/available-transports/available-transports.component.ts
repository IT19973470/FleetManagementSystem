import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-transports',
  templateUrl: './available-transports.component.html',
  styleUrls: ['./available-transports.component.css']
})
export class AvailableTransportsComponent implements OnInit {

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
