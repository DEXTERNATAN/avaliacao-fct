import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

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
            //.do(response => console.log(response))
            .map(response => response.json())
            //.catch(ErrorHandler.handleError)
    }

    getReferenciaId(id) {
        return this._http.get(`${MEAT_API}/referencia/${id}`)
        //.do(response => console.log(response.json()))
        .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    addReferencia(referencia) {
        return this._http.post(`${MEAT_API}/referencia`, JSON.stringify(referencia), this.options)
            .map(res => res.json());
    }

    deleteReferencia(id) {
        console.log(`${MEAT_API}/referencia/${id}`)
        return this._http.delete(`${MEAT_API}/referencia/${id}`)
            .map(response => response.json())
    }

    updateReferencia(id, referencia) {
        return this._http.put(`${MEAT_API}/referencia/${id}`, JSON.stringify(referencia), this.options)
            .map(response => response.json())
    }
    

}
