import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from './../app.error-handler';

import { Observable } from 'rxjs/Observable';
import { Faixa } from './faixa.model';

@Injectable()
export class FaixaService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getFaixa(): Observable<Faixa[]> {
        return this._http.get(`${MEAT_API}/faixa`)
            .map(response => response.json())
    }

    getFaixaId(id_faixa) {
        return this._http.get(`${MEAT_API}/faixa/${id_faixa}`)
        .map(response => response.json())
    }

    addFaixa(faixa) {
        return this._http.post(`${MEAT_API}/faixa`, JSON.stringify(faixa), this.options)
            .map(res => res.json());
    }

    deleteFaixa(id_faixa) {
        return this._http.delete(`${MEAT_API}/faixa/${id_faixa}`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    updateFaixa(id_faixa, faixa) {
        return this._http.put(`${MEAT_API}/faixa/${id_faixa}`, JSON.stringify(faixa), this.options)
            .map(response => response.json())
    }
}