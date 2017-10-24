import { ErrorHandler } from 'app/app.error-handler';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Tecnologia } from './tecnologia.model';

@Injectable()
export class TecnologiaService {
  
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getTecnologia(): Observable<Tecnologia[]> {
        return this._http.get(`${MEAT_API}/tecnologia`)
            .map(response => response.json())
    }

    getTecnologiaId(id_tecnologia) {
        return this._http.get(`${MEAT_API}/tecnologia/${id_tecnologia}`)
            .map(response => response.json())
    }

    addTecnologia(tecnologia) {
        return this._http.post(`${MEAT_API}/tecnologia`, JSON.stringify(tecnologia), this.options)
            .map(res => res.json());
    }

    deleteTecnologia(id_tecnologia) {
        return this._http.delete(`${MEAT_API}/tecnologia/${id_tecnologia}`)
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    updateTecnologia(id_tecnologia, tecnologia) {
        return this._http.put(`${MEAT_API}/tecnologia/${id_tecnologia}`, JSON.stringify(tecnologia), this.options)
            .map(response => response.json())
    }
}