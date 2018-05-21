import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';

import { Distribuicao } from './distribuicao.model';


@Injectable()
export class DistribuicaoService extends RestService<Distribuicao> {

    constructor(protected http: HttpClient) {
        super(http);
    }

    public getUrl(): string {
        return 'distribuicao';
    }

    public mapIdentificador(objeto: Distribuicao): number {
        return objeto.id_distribuicao;
    }

    getDistribuicao(): Observable<Distribuicao[]> {
        return super.obterTodos();
    }

    getDistribuicaoId(id): Observable<Distribuicao> {
        return super.obterPorId(id);
    }

    addDistribuicao(distribuicao: Distribuicao) {
        return super.adicionar(distribuicao);
    }

    deleteDistribuicao(id: number) {
        return super.removerPorId(id);
    }

    updateDistribuicao(id, distribuicao) {
        return super.atualizarPorId(distribuicao, id);
    }
}
