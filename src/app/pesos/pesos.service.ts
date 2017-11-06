import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Pesos } from './pesos.model';

@Injectable()
export class PesosService extends RestService<Pesos>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'pesos';
    }

    public mapIdentificador(objeto: Pesos): number {
        return objeto.id_pesos;
    }

    getPesos(): Observable<Pesos[]> {
        return super.obterTodos();
    }

    getPesosId(id): Observable<Pesos> {
        return super.obterPorId(id);
    }

    addPesos(pesos: Pesos) {
        return super.adicionar(pesos);
    }

    deletePesos(id: number) {
        return super.removerPorId(id);
    }

    updatePesos(id, pesos) {
        return super.atualizarPorId(pesos, id);
    }
}