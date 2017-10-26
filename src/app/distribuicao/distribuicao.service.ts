import { ErrorHandler } from 'app/app.error-handler';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Observable } from 'rxjs/Observable';

import { Distribuicao } from './distribuicao.model';

@Injectable()
export class DistribuicaoService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getDistribuicao(): Observable<Distribuicao[]> {
        return this._http.get(`${MEAT_API}/distribuicao`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    getDistribuicaoId(id_distribuicao) {
        return this._http.get(`${MEAT_API}/distribuicao/${id_distribuicao}`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    addDistribuicao(distribuicao) {
        return this._http.post(`${MEAT_API}/distribuicao`, JSON.stringify(distribuicao), this.options)
            .map(res => res.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    deleteDistribuicao(id_distribuicao) {
        return this._http.delete(`${MEAT_API}/distribuicao/${id_distribuicao}`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    updateDistribuicao(id_distribuicao, distribuicao) {
        return this._http.put(`${MEAT_API}/distribuicao/${id_distribuicao}`, JSON.stringify(distribuicao), this.options)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }
}