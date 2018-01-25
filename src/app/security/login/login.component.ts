import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { NotificationService } from 'app/shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('avaliacaoState', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  navigateTo: any;
  loginState = 'ready';
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
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';
  }

  login() {

    this.loginService.loginUser(this.loginForm.value).subscribe(
      users => {
        // console.log(users);
        this.notificationService.notify(`Bem Vindo, ${users.login}`);
        // console.log(users.login);
        this.router.navigate(['home']);
      },
      response => {
        // console.log(response);
        this.notificationService.notify('Dados invalidos. Por favor! tente novamente ...'); 
        // this.router.navigate([atob(this.navigateTo)]);
      }
      // ()=> {
      //   this.router.navigate([atob(this.navigateTo)]);
      // }
    );
  }

}
