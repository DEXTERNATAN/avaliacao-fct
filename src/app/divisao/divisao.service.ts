import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Divisao } from './divisao.model';

@Injectable()
export class DivisaoService extends RestService<Divisao>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'divisao';
    }

    public mapIdentificador(objeto: Divisao): number {
        return objeto.id_divisao;
    }

    getDivisao(): Observable<Divisao[]> {
        return super.obterTodos();
    }

    getDivisaoId(id): Observable<Divisao> {
        return super.obterPorId(id);
    }

    addDivisao(divisao: Divisao) {
        return super.adicionar(divisao);
    }

    deleteDivisao(id: number) {
        return super.removerPorId(id);
    }

    updateDivisao(id, divisao) {
        return super.atualizarPorId(divisao, id);
    }
}