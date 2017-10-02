import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Papel } from './papel.model';

@Injectable()
export class PapelService {
  
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }


    getPapel(): Observable<Papel[]> {
        return this._http.get(`${MEAT_API}/papel`)
            //.do(response => console.log(response))
            .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    getPapelId(id) {
        return this._http.get(`${MEAT_API}/papel/${id}`)
            //.do(response => console.log(response.json()))
            .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    addPapel(papel) {
        console.log(papel)
        debugger
        return this._http.post(`${MEAT_API}/papel`, JSON.stringify(papel), this.options)
            .map(res => res.json());
    }

    deletePapel(id) {
        console.log(`${MEAT_API}/papel/${id}`)
        return this._http.delete(`${MEAT_API}/papel/${id}`)
            .map(response => response.json())
    }

    updatePapel(id, papel) {
        debugger
        return this._http.put(`${MEAT_API}/papel/${id}`, JSON.stringify(papel), this.options)
            .map(response => response.json())
    }
}
