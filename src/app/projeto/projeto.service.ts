import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Projeto } from './projeto.model';

@Injectable()
export class ProjetoService extends RestService<Projeto>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'projeto';
    }

    public mapIdentificador(objeto: Projeto): number {
        return objeto.id_projeto;
    }

    getProjeto(): Observable<Projeto[]> {
        return super.obterTodos();
    }

    getProjetoId(id): Observable<Projeto> {
        return super.obterPorId(id);
    }

    addProjeto(projeto: Projeto) {
        return super.adicionar(projeto);
    }

    deleteProjeto(id: number) {
        return super.removerPorId(id);
    }

    updateProjeto(id, projeto) {
        return super.atualizarPorId(projeto, id);
    }
}