import { ErrorHandler } from 'app/app.error-handler';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Observable } from 'rxjs/Observable';

import { Projeto } from './projeto.model';

@Injectable()
export class ProjetoService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getProjeto(): Observable<Projeto[]> {
        return this._http.get(`${MEAT_API}/projeto`)
            .map(response => response.json())
    }

    getProjetoId(id_projeto) {
        return this._http.get(`${MEAT_API}/projeto/${id_projeto}`)
        .map(response => response.json())
    }

    addProjeto(projeto) {
        return this._http.post(`${MEAT_API}/projeto`, JSON.stringify(projeto), this.options)
            .map(res => res.json());
    }

    deleteProjeto(id_projeto) {
        return this._http.delete(`${MEAT_API}/projeto/${id_projeto}`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    updateProjeto(id_projeto, projeto) {
        return this._http.put(`${MEAT_API}/projeto/${id_projeto}`, JSON.stringify(projeto), this.options)
            .map(response => response.json())
    }
}