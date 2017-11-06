import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Impacto } from './impacto.model';

@Injectable()
export class ImpactoService extends RestService<Impacto>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'impacto';
    }

    public mapIdentificador(objeto: Impacto): number {
        return objeto.id_impacto;
    }

    getImpacto(): Observable<Impacto[]> {
        return super.obterTodos();
    }

    getImpactoId(id): Observable<Impacto> {
        return super.obterPorId(id);
    }

    addImpacto(impacto: Impacto) {
        return super.adicionar(impacto);
    }

    deleteImpacto(id: number) {
        return super.removerPorId(id);
    }

    updateImpacto(id, impacto) {
        return super.atualizarPorId(impacto, id);
    }
}