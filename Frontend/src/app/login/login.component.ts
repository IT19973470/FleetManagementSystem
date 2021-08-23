import {Component, OnInit} from '@angular/core';
import {LoginService} from "../_service/login.service";
import {Router} from "@angular/router";
import {NavbarService} from "../_service/navbar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };
  logged = true;

  constructor(private loginService: LoginService, private navBarService: NavbarService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.accLogin(this.user).subscribe((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      if (user !== null && user['accountType'] === 'TM') {
        this.navBarService.username = user['nameWithInitials'];
        this.router.navigate(['/main/item_delivery']);
      }else if (user['accountType']==='VDM'){
        this.router.navigate(['/main/vehicle']);
      }
      else {
        this.logged = false;
      }
    }, (err) => {
      this.logged = false;
    })
  }
}
