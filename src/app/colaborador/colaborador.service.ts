import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';

import { Colaborador } from './colaborador.model';

@Injectable()
export class ColaboradorService extends RestService<Colaborador> {

    constructor(protected http: Http) {
        super(http);
    }

    public getUrl(): string {
        return 'colaborador';
    }

    public mapIdentificador(objeto: Colaborador): number {
        return objeto.idColaborador;
    }

    getColaborador(): Observable<Colaborador[]> {
        return super.obterTodos();
    }

    getColaboradorId(id): Observable<Colaborador> {
        return super.obterPorId(id);
    }

    addColaborador(colaborador: Colaborador) {
        return super.adicionar(colaborador);
    }

    deleteColaborador(id: number) {
        return super.removerPorId(id);
    }

    updateColaborador(id, colaborador) {
        return super.atualizarPorId(colaborador, id);
    }
}
