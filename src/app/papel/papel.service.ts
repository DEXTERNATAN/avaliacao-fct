import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';

import { Papel } from './papel.model';

@Injectable()
export class PapelService extends RestService<Papel>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'papel';
    }

    public mapIdentificador(objeto: Papel): number {
        return objeto.id_papel;
    }

    getPapel(): Observable<Papel[]> {
        return super.obterTodos();
    }

    getPapelId(id): Observable<Papel> {
        return super.obterPorId(id);
    }

    getAtributoPapel(): Observable<Papel[]> {
        return super.obterTodos();
    }

    addPapel(papel: Papel) {
        return super.adicionar(papel);
    }

    deletePapel(id: number) {
        return super.removerPorId(id);
    }

    updatePapel(id, papel) {
        return super.atualizarPorId(papel, id);
    }
}
