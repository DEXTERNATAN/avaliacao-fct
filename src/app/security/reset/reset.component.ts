import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from 'app/security/login/user';

import { NotificationService } from 'app/shared/messages/notification.service';
import { LoginService } from 'app/security/login/login.service';

@Component({
  selector: 'mt-login',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetSenhaComponent implements OnInit {

  navigateTo: any;
  resetForm: FormGroup;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.user();

    this.resetForm = this.fb.group({
      login: this.fb.control(this.user().login, []),
      senha: this.fb.control('', []),
      confSenha: this.fb.control('', []),

      senhaAtual: this.fb.control('', [ Validators.required ]),
      senhaNova: this.fb.control('', [ Validators.required ]),
      senhaNovaConfirmacao: this.fb.control('', [ Validators.required ]),

    });

    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';
  }

  user(): User {
    return this.loginService.user;
  }

  resetPassword() {
    let user: any = {
      login: this.resetForm.value.login,
      senha: this.resetForm.value.senha,
      status_ativo: 1
    };
    console.log(user);
    this.loginService.resetUser(this.user().id_acesso, user).subscribe(
      users => {
        this.clearForm();
        this.notificationService.notify(`Senha alterada com sucesso!`);
        this.router.navigate(['recuperarSenha']);
      },
      response => {
        this.notificationService.notify('Não foi possivel alterar a senha do usuário. Por favor! tente novamente ...');
      }
    );

  }

  clearForm() {
    console.log('Limpando o formulario')
      this.resetForm.get('senha').setValue('');
      this.resetForm.get('confSenha').setValue('');
  }

}
