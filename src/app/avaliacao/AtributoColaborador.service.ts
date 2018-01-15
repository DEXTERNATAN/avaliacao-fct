import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { RestService } from 'app/shared/services/rest.service';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { AtributoColaborador } from './AtributoColaborador.model';



@Injectable()
export class AtributoColaboradorService  extends RestService<AtributoColaborador>{

    constructor(protected http: Http) {
        super(http);
    }

    public getUrl(): string {
        return 'AtributoColaborador';
    }

    public mapIdentificador(objeto: AtributoColaborador): number {
        return objeto.TB_COLABORADOR_id_colaborador;
    }

    // getAssociacaoAtributoColaborador(): Observable<AtributoColaborador[]> {
    //     return this.http.get(`${MEAT_API}/AtributoColaborador`)
    //         .map(response => response.json());
    // }

    addAssociacaoAtributoColaborador(associacao: any) {
        return super.adicionar(associacao);
    }

    // getAvaliacaoId(id): Observable<AtributoColaborador> {
    //     return super.obterPorId(id);
    // }

    // deleteAvaliacao(id: number) {
    //     return super.removerPorId(id);
    // }

    // updateAvaliacao(id, avaliacao) {
    //     return super.atualizarPorId(avaliacao, id);
    // }

    
}
