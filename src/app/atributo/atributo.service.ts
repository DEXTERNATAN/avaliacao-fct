import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Observable } from 'rxjs/Observable';

import { Atributo } from './atributo.model';
import { Abrangencia } from './../abrangencia/abrangencia.model';
import { Complexidade } from './../complexidade/complexidade.model';
import { Impacto } from './../impacto/impacto.model';

import { AbrangenciaService } from './../abrangencia/abrangencia.service';
import { ComplexidadeService } from './../complexidade/complexidade.service';
import { ImpactoService } from './../impacto/impacto.service';

import { abrangenciaRouting } from './../abrangencia/abrangencia.routes';
import { complexidadeRouting } from './../complexidade/complexidade.routes';
import { impactoRouting } from './../impacto/impacto.routes';


@Injectable()
export class AtributoService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAtributo(): Observable<Atributo[]> {
        return this._http.get(`${MEAT_API}/atributo`)
            .map(response => response.json())
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