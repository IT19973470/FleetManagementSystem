import {Component, OnInit} from '@angular/core';
import {LoginService} from "../_service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };
  logged = true;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.accLogin(this.user).subscribe((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      if (user !== null && user['accountType'] === 'Transport Manager') {
        this.router.navigate(['/main/view_item_delivery'])
      } else {
        this.logged = false;
      }
    }, (err) => {
      this.logged = false;
    })
  }
}
