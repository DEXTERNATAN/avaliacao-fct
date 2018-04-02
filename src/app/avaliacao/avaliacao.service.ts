import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { RestService } from 'app/shared/services/rest.service';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Avaliacao } from './avaliacao.model';
import { TecnologiaColaborador } from 'app/avaliacao/TecnologiaColaborador.model';

@Injectable()
export class AvaliacaoService  extends RestService<Avaliacao> {

    constructor(protected http: Http) {
        super(http);
    }

    public getUrl(): string {
        return 'avaliacao';
    }

    public mapIdentificador(objeto: Avaliacao): number {
        return objeto.id_resultado;
    }

    getMaxId() {
        return this.http.get(`${MEAT_API}/avaliacao/maxId`)
        .do(response => console.log('Ultimo id inserido: ', response.json()))
        .map(response => response.json());
    }

    getAvaliacao(): Observable<Avaliacao[]> {
        return this.http.get(`${MEAT_API}/avaliacao`)
            .map(response => response.json());
    }

    getPapelAtributo(id_papel) {
        return this.http.get(`${MEAT_API}/PapelAtributo/${id_papel}`)
        .do(response => console.log('resultado: ', response.json()))
        .map(response => response.json());
    }

    getBuscaAtributo(id_abrangencia, id_complexidade, id_impacto, letra) {
        return this.http.get(`${MEAT_API}/avaliacao/buscaAtributo/${id_abrangencia}/${id_complexidade}/${id_impacto}/${letra}`)
        .do(response => console.log('resultado: ', response.json()))
        .map(response => response.json());
    }

    addAssociacaoColaboradorTecnologia(tecnologiaColaborador: any): any {
        return this.http.post(`${MEAT_API}/avaliacao/tecnologiaColaborador/`, tecnologiaColaborador, this.getDefaultRequestOptions())
        .map(response => response.text())
        .do(data => console.log('server data:', data));
    }

    addAssociacaoColaboradorPapel(papelColaborador: any): any {
        return this.http.post(`${MEAT_API}/avaliacao/papelColaborador/`, papelColaborador, this.getDefaultRequestOptions())
        .map(response => response.text())
        .do(data => console.log('server data:', data));
    }

    addAssociacaoColaboradorProjeto(projetoColaborador: any): any {
        return this.http.post(`${MEAT_API}/avaliacao/projetoColaborador/`, projetoColaborador, this.getDefaultRequestOptions())
        .map(response => response.text())
        .do(data => console.log('server data:', data));
    }


    addAvaliacao(avaliacao: any) {
        return super.adicionar(avaliacao);
    }

    getAvaliacaoId(id): Observable<Avaliacao> {
        return super.obterPorId(id);
    }

    deleteAvaliacao(id: number) {
        return super.removerPorId(id);
    }

    updateAvaliacao(id, avaliacao) {
        return super.atualizarPorId(avaliacao, id);
    }
}
