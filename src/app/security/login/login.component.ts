import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationService } from 'app/shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

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
    private mensagensHandler: MensagensHandler,
    private router: Router
  ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      login: this.fb.control('', Validators.required),
      senha: this.fb.control('', Validators.required)
    });
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';
  }

  login() {

    this.mensagensHandler.handleClearMessages();

    this.loginService.loginUser(this.loginForm.value).subscribe(
      users => {
        this.notificationService.notify(`Bem Vindo, ${users.login}`);
        this.router.navigate(['home']);
      },
      response => {
        this.notificationService.notify('Dados invalidos. Por favor! tente novamente ...');
      }
    );
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

}
