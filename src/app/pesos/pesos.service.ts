import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from './../app.error-handler';

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

    getPesosId(id_pesos) {
        return this._http.get(`${MEAT_API}/pesos/${id_pesos}`)
        .map(response => response.json())
    }

    addPesos(pesos) {
        return this._http.post(`${MEAT_API}/pesos`, JSON.stringify(pesos), this.options)
            .map(res => res.json());
    }

    deletePesos(id_pesos) {
        return this._http.delete(`${MEAT_API}/pesos/${id_pesos}`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    updatePesos(id_pesos, pesos) {
        return this._http.put(`${MEAT_API}/pesos/${id_pesos}`, JSON.stringify(pesos), this.options)
            .map(response => response.json())
    }
}