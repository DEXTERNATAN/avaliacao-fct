import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NotificationService } from 'app/shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  navigateTo: any;
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      login: this.fb.control('', []),
      senha: this.fb.control('', [])
    });
    //this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/'
  }

  login() {

    this.loginService.loginUser( this.loginForm.value ).subscribe(
                            users => {
                              this.notificationService.notify(`Bem Vindo, ${users}`);
                              console.log(users.login);
                              this.router.navigate(['home']);
                            },
                            response => this.notificationService.notify(response.error.message)
                            // ()=> {
                            //   this.router.navigate([atob(this.navigateTo)]);
                            // }
      );
  }

}
