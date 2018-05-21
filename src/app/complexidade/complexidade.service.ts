import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';

import { Complexidade } from './complexidade.model';


@Injectable()
export class ComplexidadeService extends RestService<Complexidade>{

    constructor(protected http: HttpClient) {
        super(http);
    }

    public getUrl(): string {
        return 'complexidade';
    }

    public mapIdentificador(objeto: Complexidade): number {
        return objeto.id_complexidade;
    }

    getComplexidade(): Observable<Complexidade[]> {
        return super.obterTodos();
    }

    getComplexidadeId(id): Observable<Complexidade> {
        return super.obterPorId(id);
    }

    addComplexidade(complexidade: Complexidade) {
        return super.adicionar(complexidade);
    }

    deleteComplexidade(id: number) {
        return super.removerPorId(id);
    }

    updateComplexidade(id, complexidade) {
        return super.atualizarPorId(complexidade, id);
    }
}
