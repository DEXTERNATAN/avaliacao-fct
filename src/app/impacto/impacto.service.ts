import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Observable } from 'rxjs/Observable';

import { Impacto } from './impacto.model';

@Injectable()
export class ImpactoService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }


    getImpacto(): Observable<Impacto[]> {
        return this._http.get(`${MEAT_API}/impacto`)
            //.do(response => console.log(response))
            .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    getImpactoId(id) {
        return this._http.get(`${MEAT_API}/impacto/${id}`)
            //.do(response => console.log(response.json()))
            .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    addImpacto(impacto) {
        return this._http.post(`${MEAT_API}/impacto`, JSON.stringify(impacto), this.options)
            .map(res => res.json());
    }

    deleteImpacto(id) {
        console.log(`${MEAT_API}/impacto/${id}`)
        return this._http.delete(`${MEAT_API}/impacto/${id}`)
            .map(response => response.json())
    }

    updateImpacto(id, impacto) {
        debugger
        return this._http.put(`${MEAT_API}/impacto/${id}`, JSON.stringify(impacto), this.options)
            .map(response => response.json())
    }
}
