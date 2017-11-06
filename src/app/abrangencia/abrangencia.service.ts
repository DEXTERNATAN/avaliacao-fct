import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Abrangencia } from './abrangencia.model';

@Injectable()
export class AbrangenciaService extends RestService<Abrangencia>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'abrangencia';
    }

    public mapIdentificador(objeto: Abrangencia): number {
        return objeto.id_abrangencia;
    }

    getAbrangencia(): Observable<Abrangencia[]> {
        return super.obterTodos();
    }

    getAbrangenciaId(id): Observable<Abrangencia> {
        return super.obterPorId(id);
    }

    addAbrangencia(abrangencia: Abrangencia) {
        return super.adicionar(abrangencia);
    }

    deleteAbrangencia(id: number) {
        return super.removerPorId(id);
    }

    updateAbrangencia(id, abrangencia) {
        return super.atualizarPorId(abrangencia, id);
    }
}