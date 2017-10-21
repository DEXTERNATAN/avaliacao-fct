import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Atributo } from './atributo.model';

@Injectable()
export class AtributoService {
    headers: Headers;
    options: RequestOptions;
    Atributo: any;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAtributo(): Observable<Atributo[]> {
        // if(this.Atributo != null){
        //     return Observable.of(this.Atributo);
        // }else{
            return this._http.get(`${MEAT_API}/atributo`, {})
            .map(response => response.json())
            .do(atributo => this.Atributo = atributo)
            // .publishReplay(1)
            //     .refCount();
        //}
    }

    getAtributoId(id) {
        return this._http.get(`${MEAT_API}/atributo/${id}`)
            .map(response => response.json())
    }

    addAtributo(atributo) {
        return this._http.post(`${MEAT_API}/atributo`, JSON.stringify(atributo), this.options)
            .map(res => res.json());
    }

    deleteAtributo(id) {
        return this._http.delete(`${MEAT_API}/atributo/${id}`)
            .map(response => response.json())
    }

    updateAtributo(id, atributo) {
        return this._http.put(`${MEAT_API}/atributo/${id}`, JSON.stringify(atributo), this.options)
            .map(response => response.json())
    }
}