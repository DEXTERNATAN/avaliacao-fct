import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { Consultaavaliacao } from './consultaavaliacao.model';

@Injectable()
export class ConsultaavaliacaoService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getResultadoAvaliacao(id: number): Observable<Consultaavaliacao[]> {
        return this._http.get(`${MEAT_API}/avaliacao/${id}/resultado`)
            .map(response => response.json());
    }
}