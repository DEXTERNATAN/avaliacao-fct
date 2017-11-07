import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Colaborador } from './colaborador.model';

@Injectable()
export class ColaboradorService extends RestService<Colaborador>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'colaborador';
    }

    public mapIdentificador(objeto: Colaborador): number {
        return objeto.idColaborador;
    }

    getColaborador(): Observable<Colaborador[]> {
        return super.obterTodos();
    }

    getColaboradorId(id): Observable<Colaborador> {
        return super.obterPorId(id);
    }

    addColaborador(colaborador: Colaborador) {
        debugger
        return super.adicionar(colaborador);
    }

    deleteColaborador(id: number) {
        return super.removerPorId(id);
    }

    updateColaborador(id, colaborador) {
        debugger
        return super.atualizarPorId(colaborador, id);
    }
}