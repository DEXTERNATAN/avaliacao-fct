import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { RestService } from 'app/shared/services/rest.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { ErrorHandler } from 'app/app.error-handler';
import { ApplicationErrorMessage } from 'app/shared/models/ApplicationErrorMessage';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Atributo } from './atributo.model';

@Injectable()
export class AtributoService extends RestService<Atributo>{
    
    constructor(protected http: Http){
        super(http);
    }
    
    public getUrl(): string {
        return 'atributo';
    }

    public mapIdentificador(objeto: Atributo): number {
        return objeto.idAtributo;
    }
        
    getAtributo(): Observable<Atributo[]> {
        return super.obterTodos();
    }

    getAtributoId(id): Observable<Atributo> {
        return super.obterPorId(id);
    }

    addAtributo(atributo: Atributo) {
        return super.adicionar(atributo);
    }

    deleteAtributo(id: number) {
        return super.removerPorId(id);
    }

    updateAtributo(id, atributo) {
        return super.atualizarPorId(atributo, id);
    }
}