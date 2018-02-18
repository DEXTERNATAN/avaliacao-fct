import { Injectable, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';


@Injectable()
export class MensagensHandler {

    private onError: EventEmitter<ApplicationErrorMessage[]> = new EventEmitter<ApplicationErrorMessage[]>();
    private onSuccess: EventEmitter<String> = new EventEmitter<String>();
    private onMessages: EventEmitter<ApplicationErrorMessage[]> = new EventEmitter<ApplicationErrorMessage[]>();
    private onClearMessages: EventEmitter<any> = new EventEmitter<any>();

    constructor() { 
        console.debug('MensagensHandler');
    }

    subscribeToError(callback: (erros: ApplicationErrorMessage[]) => void) {
        this.onError.subscribe(callback);
    }

    subscribeToSuccess(callback: (msg: String) => void) {
        this.onSuccess.subscribe(callback);
    }

    subscribeToMessages(callback: (erros: ApplicationErrorMessage[]) => void) {
        this.onMessages.subscribe(callback);
    }

    subscribeToClearMessages(callback: () => void) {
        this.onClearMessages.subscribe(callback);
    }

    handleError(erros: ApplicationErrorMessage[]) {
        this.onError.emit(erros);
    }

    handleMessage(mensagens: ApplicationErrorMessage[]) {
        this.onMessages.emit(mensagens);
    }

    handleSuccess(mensagem: String) {
        this.onSuccess.emit(mensagem);
        setTimeout(() => {
            this.handleClearMessages();
        }, 3000);
    }


    handleClearMessages() {
        this.onClearMessages.emit();
    }

    handleHttpError(errorResponse: Response) {
        this.onError.emit(errorResponse.json());
    }
}