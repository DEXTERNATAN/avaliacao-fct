import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

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
            //.do(response => console.log(response))
            .map(response => response.json())
            //.catch(ErrorHandler.handleError)
    }

    getAbrangenciaId(id) {
        return this._http.get(`${MEAT_API}/abrangencia/${id}`)
        //.do(response => console.log(response.json()))
        .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    addAbrangencia(abrangencia) {
        return this._http.post(`${MEAT_API}/abrangencia`, JSON.stringify(abrangencia), this.options)
            .map(res => res.json());
    }

    deleteAbrangencia(id) {
        console.log(`${MEAT_API}/abrangencia/${id}`)
        return this._http.delete(`${MEAT_API}/abrangencia/${id}`)
            .map(response => response.json())
    }

    updateAbrangencia(id, abrangencia) {
        return this._http.put(`${MEAT_API}/abrangencia/${id}`, JSON.stringify(abrangencia), this.options)
            .map(response => response.json())
    }
    

}
