import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Faixa } from './faixa.model';

@Injectable()
export class FaixaService extends RestService<Faixa>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'faixa';
    }

    public mapIdentificador(objeto: Faixa): number {
        return objeto.id_faixa;
    }

    getFaixa(): Observable<Faixa[]> {
        return super.obterTodos();
    }

    getFaixaId(id): Observable<Faixa> {
        return super.obterPorId(id);
    }

    addFaixa(faixa: Faixa) {
        return super.adicionar(faixa);
    }

    deleteFaixa(id: number) {
        return super.removerPorId(id);
    }

    updateFaixa(id, faixa) {
        return super.atualizarPorId(faixa, id);
    }
}