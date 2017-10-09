import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Observable } from 'rxjs/Observable';

import { Colaborador } from './colaborador.model';
import { Divisao } from './../divisao/divisao.model';
import { DivisaoService } from 'app/divisao/divisao.service';
import { divisaoRouting } from './../divisao/divisao.routes';
import { ReferenciaService } from './../referencia/referencia.service';
import { Referencia } from './../referencia/referencia.model';
import { referenciaRouting } from './../referencia/referencia.routes';

@Injectable()
export class ColaboradorService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getColaborador(): Observable<Colaborador[]> {
        return this._http.get(`${MEAT_API}/colaborador`)
            .map(response => response.json())
    }

    getColaboradorId(id) {
        return this._http.get(`${MEAT_API}/colaborador/${id}`)
            .map(response => response.json())
    }

    addColaborador(colaborador) {
        return this._http.post(`${MEAT_API}/colaborador`, JSON.stringify(colaborador), this.options)
            .map(res => res.json());
    }

    deleteColaborador(id) {
        return this._http.delete(`${MEAT_API}/colaborador/${id}`)
            .map(response => response.json())
    }

    updateColaborador(id, colaborador) {
        return this._http.put(`${MEAT_API}/colaborador/${id}`, JSON.stringify(colaborador), this.options)
            .map(response => response.json())
    }
}
