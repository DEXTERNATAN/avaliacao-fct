import { ErrorHandler } from 'app/app.error-handler';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Observable } from 'rxjs/Observable';

import { Complexidade } from './complexidade.model';

@Injectable()
export class ComplexidadeService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getComplexidade(): Observable<Complexidade[]> {
        return this._http.get(`${MEAT_API}/complexidade`)
            .map(response => response.json())
    }

    getComplexidadeId(id) {
        return this._http.get(`${MEAT_API}/complexidade/${id}`)
            .map(response => response.json())
    }

    addComplexidade(complexidade) {
        return this._http.post(`${MEAT_API}/complexidade`, JSON.stringify(complexidade), this.options)
            .map(res => res.json());
    }

    deleteComplexidade(id) {
        return this._http.delete(`${MEAT_API}/complexidade/${id}`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
            
    }

    updateComplexidade(id, complexidade) {
        return this._http.put(`${MEAT_API}/complexidade/${id}`, JSON.stringify(complexidade), this.options)
            .map(response => response.json())
    }
}
