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
            //.do(response => console.log(response))
            .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    getDivisaoId(id) {
        return this._http.get(`${MEAT_API}/divisao/${id}`)
            //.do(response => console.log(response.json()))
            .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    addDivisao(divisao) {
        return this._http.post(`${MEAT_API}/divisao`, JSON.stringify(divisao), this.options)
            .map(res => res.json());
    }

    deleteDivisao(id) {
        console.log(`${MEAT_API}/divisao/${id}`)
        return this._http.delete(`${MEAT_API}/divisao/${id}`)
            .map(response => response.json())
    }

    updateDivisao(id, divisao) {
        debugger
        return this._http.put(`${MEAT_API}/divisao/${id}`, JSON.stringify(divisao), this.options)
            .map(response => response.json())
    }


}
