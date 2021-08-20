import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../_service/navbar.service";

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

  constructor(private navBarService: NavbarService) { }

  ngOnInit(): void {
  }

  setTopic(topic){
    this.navBarService.navTopic.next(topic);
  }
}
