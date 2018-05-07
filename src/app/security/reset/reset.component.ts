import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from 'app/security/login/user';

import { NotificationService } from 'app/shared/messages/notification.service';
import { LoginService } from 'app/security/login/login.service';
import { GlobalCustomValidation } from 'app/shared/GlobalCustomValidation';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

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
        private mensageHandler: MensagensHandler,
        private router: Router
    ) {

        this.user();

        this.resetForm = this.fb.group({
            login: this.fb.control(this.user().login, []),
            senhaAtual: this.fb.control(null, [Validators.required, Validators.minLength(8) ]),
            senhaNova: this.fb.control(null, [Validators.required, Validators.minLength(8) ]),
            senhaNovaConfirmacao: this.fb.control(null, [Validators.required, Validators.minLength(8) ])
        }, {
                validator: GlobalCustomValidation.MatchPassword
            }
        );

    }

    ngOnInit() {

        this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';
    }

    user(): User {
        return this.loginService.user;
    }

    resetPassword() {

        let user: any = {
            login: this.resetForm.value.login,
            senhaAtual: this.resetForm.value.senhaAtual,
            senhaNova: this.resetForm.value.senhaNova,
            senhaNovaConfirmacao: this.resetForm.value.senhaNovaConfirmacao,
            status_ativo: 1
        };

        this.loginService.resetUser(this.user().id_acesso, user).subscribe(
            users => {
                this.clearForm();
                this.notificationService.notify(`Senha alterada com sucesso!`);
                this.router.navigate(['recuperarSenha']);
            },
            response => {
                this.mensageHandler.handleClearMessages();
                console.log('Repos error: ', response);
                this.notificationService.notify(response);
                // .replace('"','').replace('"','')
            }
        );

    }

    clearForm() {
        this.resetForm.reset();
        this.resetForm.get('login').setValue(this.user().login);
    }

}
