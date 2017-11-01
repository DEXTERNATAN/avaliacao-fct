import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoaderState } from 'app/shared/models/loader-state';

const MSG_AGUARDE: string = "Aguarde ...";

@Injectable()
export class LoaderService {
    private loaderSubject = new Subject<LoaderState>();
    loaderState = this.loaderSubject.asObservable();
    private msgLoading: string = MSG_AGUARDE;

    constructor() { 
        console.debug('LoaderService');
    }
    show() {
        this.loaderSubject.next(<LoaderState>{ show: true, msg: this.msgLoading});
    }
    hide() {
        this.loaderSubject.next(<LoaderState>{ show: false,  msg:''});     
    }
    setMsgLoading(msg) {
        this.msgLoading = msg;
    }

    limparMsg() {
        this.msgLoading = MSG_AGUARDE;
    }

}

