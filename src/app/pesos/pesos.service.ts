import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Observable } from 'rxjs/Observable';

import { Pesos } from './pesos.model';

@Injectable()
export class PesosService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getPesos(): Observable<Pesos[]> {
        return this._http.get(`${MEAT_API}/pesos`)
            .map(response => response.json())
    }

    getPesosId(id) {
        return this._http.get(`${MEAT_API}/pesos/${id}`)
        .map(response => response.json())
    }

    addPesos(pesos) {
        return this._http.post(`${MEAT_API}/pesos`, JSON.stringify(pesos), this.options)
            .map(res => res.json());
    }

    deletePesos(id) {
        return this._http.delete(`${MEAT_API}/pesos/${id}`)
            .map(response => response.json())
    }

    updatePesos(id, pesos) {
        return this._http.put(`${MEAT_API}/pesos/${id}`, JSON.stringify(pesos), this.options)
            .map(response => response.json())
    }
}