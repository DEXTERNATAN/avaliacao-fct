import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';

import { Faixa } from './faixa.model';


@Injectable()
export class FaixaService extends RestService<Faixa> {

    constructor(protected http: HttpClient) {
        super(http);
    }

    public getUrl(): string {
        return 'faixa';
    }

    public mapIdentificador(objeto: Faixa): number {
        return objeto.id_faixa;
    }

    getFaixa(): Observable<Faixa[]> {
        return super.obterTodos();
    }

    getFaixaId(id): Observable<Faixa> {
        return super.obterPorId(id);
    }

    addFaixa(faixa: Faixa) {
        return super.adicionar(faixa);
    }

    deleteFaixa(id: number) {
        return super.removerPorId(id);
    }

    deleteFaixaAll() {
        return super.removerAll();
    }

    updateFaixa(id, faixa) {
        return super.atualizarPorId(faixa, id);
    }
}
