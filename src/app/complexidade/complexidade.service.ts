import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Complexidade } from './complexidade.model';

@Injectable()
export class ComplexidadeService extends RestService<Complexidade>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'complexidade';
    }

    public mapIdentificador(objeto: Complexidade): number {
        return objeto.id_complexidade;
    }

    getComplexidade(): Observable<Complexidade[]> {
        return super.obterTodos();
    }

    getComplexidadeId(id): Observable<Complexidade> {
        return super.obterPorId(id);
    }

    addComplexidade(complexidade: Complexidade) {
        return super.adicionar(complexidade);
    }

    deleteComplexidade(id: number) {
        return super.removerPorId(id);
    }

    updateComplexidade(id, complexidade) {
        return super.atualizarPorId(complexidade, id);
    }
}