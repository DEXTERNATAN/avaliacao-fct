import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from './../app.error-handler';

import { Observable } from 'rxjs/Observable';
import { Referencia } from './referencia.model';

@Injectable()
export class ReferenciaService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getReferencia(): Observable<Referencia[]> {
        return this._http.get(`${MEAT_API}/referencia`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    getReferenciaId(id_referencia_fct_gfe) {
        return this._http.get(`${MEAT_API}/referencia/${id_referencia_fct_gfe}`)
        .map(response => response.json())
        .do(data => console.log('server data:', data))  // debug
        .catch(ErrorHandler.handleError);
    }

    addReferencia(referencia) {
        return this._http.post(`${MEAT_API}/referencia`, JSON.stringify(referencia), this.options)
            .map(res => res.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    deleteReferencia(id_referencia_fct_gfe) {
        return this._http.delete(`${MEAT_API}/referencia/${id_referencia_fct_gfe}`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    updateReferencia(id_referencia_fct_gfe, referencia) {
        return this._http.put(`${MEAT_API}/referencia/${id_referencia_fct_gfe}`, JSON.stringify(referencia), this.options)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }
}