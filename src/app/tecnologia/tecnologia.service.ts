import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Tecnologia } from './tecnologia.model';

@Injectable()
export class TecnologiaService extends RestService<Tecnologia>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'tecnologia';
    }

    public mapIdentificador(objeto: Tecnologia): number {
        return objeto.id_tecnologia;
    }

    getTecnologia(): Observable<Tecnologia[]> {
        return super.obterTodos();
    }

    getTecnologiaId(id): Observable<Tecnologia> {
        return super.obterPorId(id);
    }

    addTecnologia(tecnologia: Tecnologia) {
        return super.adicionar(tecnologia);
    }

    deleteTecnologia(id: number) {
        return super.removerPorId(id);
    }

    updateTecnologia(id, tecnologia) {
        return super.atualizarPorId(tecnologia, id);
    }
}