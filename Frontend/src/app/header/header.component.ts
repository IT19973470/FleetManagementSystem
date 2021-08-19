import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../_service/navbar.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  topic;

  constructor(private navBarService: NavbarService) {
    navBarService.navTopic.subscribe((topic) => {
      this.topic = topic;
    })
  }

  ngOnInit(): void {
  }

}
