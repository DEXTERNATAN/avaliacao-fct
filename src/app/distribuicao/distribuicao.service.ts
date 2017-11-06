import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Distribuicao } from './distribuicao.model';

@Injectable()
export class DistribuicaoService extends RestService<Distribuicao>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'distribuicao';
    }

    public mapIdentificador(objeto: Distribuicao): number {
        return objeto.id_distribuicao;
    }

    getDistribuicao(): Observable<Distribuicao[]> {
        return super.obterTodos();
    }

    getDistribuicaoId(id): Observable<Distribuicao> {
        return super.obterPorId(id);
    }

    addDistribuicao(distribuicao: Distribuicao) {
        return super.adicionar(distribuicao);
    }

    deleteDistribuicao(id: number) {
        return super.removerPorId(id);
    }

    updateDistribuicao(id, distribuicao) {
        return super.atualizarPorId(distribuicao, id);
    }
}