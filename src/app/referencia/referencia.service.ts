import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Referencia } from './referencia.model';

@Injectable()
export class ReferenciaService extends RestService<Referencia>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'referencia';
    }

    public mapIdentificador(objeto: Referencia): number {
        return objeto.id_referencia_fct_gfe;
    }

    getReferencia(): Observable<Referencia[]> {
        return super.obterTodos();
    }

    getReferenciaId(id): Observable<Referencia> {
        return super.obterPorId(id);
    }

    addReferencia(referencia: Referencia) {
        return super.adicionar(referencia);
    }

    deleteReferencia(id: number) {
        return super.removerPorId(id);
    }

    updateReferencia(id, referencia) {
        return super.atualizarPorId(referencia, id);
    }
}