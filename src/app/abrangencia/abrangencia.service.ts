import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from './../app.error-handler';

import { Observable } from 'rxjs/Observable';
import { Abrangencia } from './abrangencia.model';

@Injectable()
export class AbrangenciaService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAbrangencia(): Observable<Abrangencia[]> {
        return this._http.get(`${MEAT_API}/abrangencia`)
            .map(response => response.json())
    }

    getAbrangenciaId(id_abrangencia) {
        return this._http.get(`${MEAT_API}/abrangencia/${id_abrangencia}`)
        .map(response => response.json())
    }

    addAbrangencia(abrangencia) {
        return this._http.post(`${MEAT_API}/abrangencia`, JSON.stringify(abrangencia), this.options)
            .map(res => res.json());
    }

    deleteAbrangencia(id_abrangencia) {
        return this._http.delete(`${MEAT_API}/abrangencia/${id_abrangencia}`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    updateAbrangencia(id_abrangencia, abrangencia) {
        return this._http.put(`${MEAT_API}/abrangencia/${id_abrangencia}`, JSON.stringify(abrangencia), this.options)
            .map(response => response.json())
    }

}
