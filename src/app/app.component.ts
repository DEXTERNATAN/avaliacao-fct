import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/security/login/login.service';

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  mostrarMenu: boolean = false;
  content = 'Bem vindo ao Avalia App!';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.isLoggedIn();
  }
  
  isloggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

}

@NgModule({
  imports: [
    FormsModule,
    TextMaskModule
  ],
  declarations: []
})
export class MyModule { }