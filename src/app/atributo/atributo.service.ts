import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';
import { Atributo } from './atributo.model';


@Injectable()
export class AtributoService extends RestService<Atributo>{

    constructor(protected http: HttpClient ) {
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
