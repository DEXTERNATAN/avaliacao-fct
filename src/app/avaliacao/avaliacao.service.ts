import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Avaliacao } from './avaliacao.model';

@Injectable()
export class AvaliacaoService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAvaliacao(): Observable<Avaliacao[]> {
        return this._http.get(`${MEAT_API}/avaliacao`)
            .map(response => response.json())
    }

    getAvaliacaoId(id_avaliacao) {
        return this._http.get(`${MEAT_API}/avaliacao/${id_avaliacao}`)
        .map(response => response.json())
    }

    addAvaliacao(avaliacao) {
        return this._http.post(`${MEAT_API}/avaliacao`, JSON.stringify(avaliacao), this.options)
            .map(res => res.json());
    }

    deleteAvaliacao(id_avaliacao) {
        return this._http.delete(`${MEAT_API}/avaliacao/${id_avaliacao}`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    updateAvaliacao(id_avaliacao, avaliacao) {
        return this._http.put(`${MEAT_API}/avaliacao/${id_avaliacao}`, JSON.stringify(avaliacao), this.options)
            .map(response => response.json())
    }

}
