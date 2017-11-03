import { Component, OnInit } from '@angular/core';
import { ApplicationErrorMessage }from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

@Component({
    selector: 'avalia-mensagens',
    templateUrl: './mensagens.component.html'
})

export class MensagensComponent implements OnInit {

    errorMessages: ApplicationErrorMessage[] = [];
    successMessage: String = "";
    constructor(private mensagensHandler: MensagensHandler) { }

    ngOnInit() {
        this.mensagensHandler.subscribeToError((errors: ApplicationErrorMessage[]) => {
            if (errors && errors.length > 0) {
                for (let error of errors) {
                    if (error.description)
                        this.errorMessages.push(error);
                    else {
                        this.errorMessages.push({
                            description: 'Ocorreu um erro inesperado. Consulte o administrador de sistema.',
                            uid: 'ERROR'
                        });                       
                    }
                }
            } else {
                this.errorMessages.push({
                    description: 'Ocorreu um erro inesperado. Consulte o administrador de sistema.',
                    uid: 'ERROR'
                });
            }
        });

        this.mensagensHandler.subscribeToClearMessages(() => {
            this.clear();
            
        });  
        
        this.mensagensHandler.subscribeToSuccess((msgSucess: String) => {
            this.successMessage = msgSucess;            
        });   
    }

    get hasErrorMessages(): boolean {
        return this.errorMessages.length > 0;
    }

    get hasSuccessMessage(): boolean {
        return this.successMessage.length > 0;
    }

    clear() {
        this.errorMessages = [];
        this.successMessage = "";
    }

    remover(errorMensage: ApplicationErrorMessage) {
        this.errorMessages = this.errorMessages.filter((iErrorMensage) => iErrorMensage != errorMensage);
    }

    removerSuccessMessage() {
        this.successMessage="";
    }

}