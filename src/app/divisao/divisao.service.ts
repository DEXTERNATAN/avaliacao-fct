import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';

import { Divisao } from './divisao.model';

@Injectable()
export class DivisaoService extends RestService<Divisao>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'divisao';
    }

    public mapIdentificador(objeto: Divisao): number {
        return objeto.id_divisao;
    }

    getDivisao(): Observable<Divisao[]> {
        return super.obterTodos();
    }

    getDivisaoId(id): Observable<Divisao> {
        return super.obterPorId(id);
    }

    addDivisao(divisao: Divisao) {
        return super.adicionar(divisao);
    }

    deleteDivisao(id: number) {
        return super.removerPorId(id);
    }

    updateDivisao(id, divisao) {
        return super.atualizarPorId(divisao, id);
    }
}