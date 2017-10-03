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
            //.do(response => console.log(response))
            .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    getTecnologiaId(id) {
        return this._http.get(`${MEAT_API}/tecnologia/${id}`)
            //.do(response => console.log(response.json()))
            .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    addTecnologia(tecnologia) {
        console.log(tecnologia)
        debugger
        return this._http.post(`${MEAT_API}/tecnologia`, JSON.stringify(tecnologia), this.options)
            .map(res => res.json());
    }

    deleteTecnologia(id) {
        console.log(`${MEAT_API}/tecnologia/${id}`)
        return this._http.delete(`${MEAT_API}/tecnologia/${id}`)
            .map(response => response.json())
    }

    updateTecnologia(id, tecnologia) {
        debugger
        return this._http.put(`${MEAT_API}/tecnologia/${id}`, JSON.stringify(tecnologia), this.options)
            .map(response => response.json())
    }
}
