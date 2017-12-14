import { Component, OnInit } from '@angular/core';

import { LoginService } from 'app/security/login/login.service';
import { User } from 'app/security/login/user';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user()
  }

  user(): User {
    console.log('USER: ', this.loginService.user);
    return this.loginService.user;
  }

  isloggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  login(){
    return this.loginService.handleLogin();
  }

  logout() {
    return this.loginService.logout();
  }

}
