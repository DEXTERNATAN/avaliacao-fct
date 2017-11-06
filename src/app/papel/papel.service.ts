import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Papel } from './papel.model';

@Injectable()
export class PapelService extends RestService<Papel>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'papel';
    }

    public mapIdentificador(objeto: Papel): number {
        return objeto.id_papel;
    }

    getPapel(): Observable<Papel[]> {
        return super.obterTodos();
    }

    getPapelId(id): Observable<Papel> {
        return super.obterPorId(id);
    }

    addPapel(papel: Papel) {
        return super.adicionar(papel);
    }

    deletePapel(id: number) {
        return super.removerPorId(id);
    }

    updatePapel(id, papel) {
        return super.atualizarPorId(papel, id);
    }
}