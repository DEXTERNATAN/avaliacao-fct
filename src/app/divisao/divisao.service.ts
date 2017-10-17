import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Observable } from 'rxjs/Observable';

import { Divisao } from './divisao.model';

@Injectable()
export class DivisaoService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getDivisao(): Observable<Divisao[]> {
        return this._http.get(`${MEAT_API}/divisao`)
            .map(response => response.json())
    }

    getDivisaoId(id_divisao) {
        return this._http.get(`${MEAT_API}/divisao/${id_divisao}`)
            .do(response => console.log('xx', response))
            .map(res => res.json())
    }

    addDivisao(divisao) {
        return this._http.post(`${MEAT_API}/divisao`, JSON.stringify(divisao), this.options)
            .map(res => res.json());
    }

    deleteDivisao(id_divisao) {
        return this._http.delete(`${MEAT_API}/divisao/${id_divisao}`)
            .map(response => response.json())
    }

    updateDivisao(id_divisao, divisao) {
        return this._http.put(`${MEAT_API}/divisao/${id_divisao}`, JSON.stringify(divisao), this.options)
            .map(response => response.json())
    }
}
