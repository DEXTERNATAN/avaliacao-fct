import { AuthenticationService } from 'app/login/login.service';
import { Component, OnInit } from '@angular/core';

import { User } from './../login/login.service';

@Component({

  selector: 'mt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User;

  constructor( private _service: AuthenticationService ) {
    
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    // this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }

}
