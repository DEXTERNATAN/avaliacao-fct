import { LoginService } from './login.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { NotificationService } from 'app/shared/messages/notification.service';
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

    senhaNova: any;
    navigateTo: any;
    loginState = 'ready';
    modalRef: BsModalRef;
    loginForm: FormGroup;
    recuperarSenhaForm: FormGroup;

    constructor(private fb: FormBuilder,
        private loginService: LoginService,
        private notificationService: NotificationService,
        private activatedRoute: ActivatedRoute,
        private mensagensHandler: MensagensHandler,
        private modalService: BsModalService,
        private router: Router
    ) { }

    ngOnInit() {

        // Formulario para recuperar a senha do usuario
        this.recuperarSenhaForm = this.fb.group({
            email: this.fb.control('', Validators.compose([Validators.required, Validators.email]))
        });


        // Formulario para efetuar o login do usuario
        this.loginForm = this.fb.group({
            login: this.fb.control('', Validators.required),
            senha: this.fb.control('', Validators.required)
        });

        this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';

    }

    login() {

        this.loginService.loginUser(this.loginForm.value).subscribe(
            users => {

                this.notificationService.notify(`Bem Vindo, ${users.login}`);
                this.router.navigate(['home']);
            },
            response => {
                this.mensagensHandler.handleClearMessages();
                this.notificationService.notify('Dados invalidos. Por favor! tente novamente ...');
            }
        );
    }

    openModalEsqueceuSenha(template: TemplateRef<any>) {
        this.openModal(template);
    }

    resetarSenha() {

        console.log('Resetar a senha', this.recuperarSenhaForm.value);
        const email = this.recuperarSenhaForm.value;

        this.loginService.recuperarSenha(email).subscribe(
            data => {
                this.senhaNova = data.replace('"','').replace('"','');
                console.log('Ok ... Sucesso', data);
            }, error => {
                console.log('Error: ', error);
            });

        // this.modalRef.hide();

    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
    }

}
