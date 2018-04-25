import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';
import { Papel } from './papel.model';

export class AtributoPapel {
    TB_ATRIBUTO_id_atributo: number;
    TB_PAPEL_id_papel: number;
}

@Injectable()
export class PapelService extends RestService<Papel>{

    private papel: Papel;

    constructor(protected http: Http) {
        super(http);
    }

    public getUrl(): string {
        return 'papel';
    }

    mapIdentificador(objeto: Papel): number {
        return objeto.id_papel;
    }

    getPapel(): Observable<Papel[]> {
        return super.obterTodos();
    }

    getPapelId(id): Observable<Papel> {
        return super.obterPorId(id);
    }

    addPapel(papel: Papel) {
        return super.adicionar(papel);
    }

    deletePapel(id: number) {
        return super.removerPorId(id);
    }

    updatePapel(papel, id) {
        return super.atualizarPorId(papel, id);
    }

    getAtributoPapel(): Observable<Papel[]> {
        return this.http.get(`${MEAT_API}/AtributoPapel/`, this.getDefaultRequestOptions())
        .do(response => console.log('resultado: ', response.json()))
        .map(response => response.json());
    }

    addAtributoPapel(atributoPapel: AtributoPapel): Observable<string> {
        return this.http.post(`${MEAT_API}/AtributoPapel/`, atributoPapel, this.getDefaultRequestOptions())
            .map(response => response.text());
    }

    deleteAtributoPapel(id: number): Observable<string> {
        return this.http.delete(`${MEAT_API}/AtributoPapel/` + id, this.getDefaultRequestOptions())
        .do(response => console.log('resultado: ', response.json()))
        .map(response => response.text());
    }

}
