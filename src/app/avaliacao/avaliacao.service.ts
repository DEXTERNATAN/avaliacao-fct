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

@Injectable()
export class AvaliacaoService  extends RestService<Avaliacao>{

    constructor(protected http: Http){
        super(http);
    }

    public getUrl(): string {
        return 'avaliacao';
    }

    public mapIdentificador(objeto: Avaliacao): number {
        return objeto.id_resultado;
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


    // deleteAvaliacao(id_avaliacao) {
    //     return this.http.delete(`${MEAT_API}/avaliacao/${id_avaliacao}`)
    //         .map(response => response.json())
    //         .do(data => console.log('server data:', data))  // debug
    //         .catch(ErrorHandler.handleError);
    // }

    // getAvaliacaoId(id_avaliacao) {
    //     return this.http.get(`${MEAT_API}/avaliacao/${id_avaliacao}`)
    //     .map(response => response.json())
    // }

    // // addAvaliacao(avaliacao) {
    // //     return this._http.post(`${MEAT_API}/avaliacao`, JSON.stringify(avaliacao), this.options)
    // //         .map(res => res.json());
    // // }

    // addAvaliacao(avaliacao: any): Observable<any> {
    //     debugger
    //     let body = JSON.stringify(avaliacao);
    //     return this._http.post('http://localhost:3000/avaliacao', body, this.options)
    //         .map(this.extractData)
    //         .do(data => console.log('server data:', data))  // debug
    //         .catch(ErrorHandler.handleError);
    // }

    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body || {};
    // }


    // updateAvaliacao(id_avaliacao, avaliacao) {
    //     return this._http.put(`${MEAT_API}/avaliacao/${id_avaliacao}`, JSON.stringify(avaliacao), this.options)
    //         .map(response => response.json())
    // }

}
