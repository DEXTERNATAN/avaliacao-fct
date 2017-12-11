import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import {Component, OnInit} from '@angular/core';

import { AuthenticationService, User } from 'app/login/login.service';


@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html',
  providers: [ AuthenticationService ]
})
export class AppComponent implements OnInit {

  public user: User;
  mostrarMenu: boolean = false; 
  content = 'Bem vindo ao Avalia App!';

  constructor(private _service: AuthenticationService) { }

  ngOnInit() {
    // this._service.checkCredentials();
    this._service.mostrarMenuEmitter.subscribe( mostrar => this.mostrarMenu = mostrar );
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
 
@NgModule({
  imports: [
    FormsModule,
    TextMaskModule
  ],
  declarations: []
})
export class MyModule {}