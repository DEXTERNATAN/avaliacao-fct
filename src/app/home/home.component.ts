import { AuthenticationService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/login/login.service';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ AuthenticationService ]
})
export class HomeComponent implements OnInit {
  user: User;
  constructor(
    private _service: AuthenticationService
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    // this._service.checkCredentials();
  }

  ngOnInit() { }

  logout() {
    this._service.logout();
  }

}
