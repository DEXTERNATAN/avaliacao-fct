import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';

import { Projeto } from './projeto.model';

@Injectable()
export class ProjetoService extends RestService<Projeto>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'projeto';
    }

    public mapIdentificador(objeto: Projeto): number {
        return objeto.id_projeto;
    }

    getProjeto(): Observable<Projeto[]> {
        return super.obterTodos();
    }

    getProjetoId(id): Observable<Projeto> {
        return super.obterPorId(id);
    }

    addProjeto(projeto: Projeto) {
        return super.adicionar(projeto);
    }

    deleteProjeto(id: number) {
        return super.removerPorId(id);
    }

    updateProjeto(id, projeto) {
        return super.atualizarPorId(projeto, id);
    }
}