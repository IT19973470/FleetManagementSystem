import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-over-time',
  templateUrl: './new-over-time.component.html',
  styleUrls: ['./new-over-time.component.css']
})
export class NewOverTimeComponent implements OnInit {
  otDetail = {
    overTimeID:'',
    otDate:'',
    noOfShifts:'',
    startTime:'',
    endTime:'',
    approval:''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    return false;
  }
}
