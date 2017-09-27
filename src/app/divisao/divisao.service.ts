import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { Observable } from 'rxjs/Observable';

import { Divisao } from './divisao.model';

@Injectable()
export class DivisaoService {

    constructor(private _http: Http){}
    
    getDivisao(): Observable<Divisao[]> {
        return this._http.get(`${MEAT_API}/divisao`)
        .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    getDivisaoId(id){
        return this._http.get(`${MEAT_API}/divisao${id}`)
        .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    addDivisao(divisao){
        return this._http.post(`${MEAT_API}/divisao`, JSON.stringify(divisao))
          .map(res => res.json());
      }
 
    deleteDivisao(id){
        console.log(`${MEAT_API}/divisao/${id}`)
        return this._http.delete(`${MEAT_API}/divisao/${id}`)
        .map(response => response.json())
    }

    updateDivisao(divisao){
        return this._http.put(`${MEAT_API}/divisao/`, JSON.stringify(divisao))
        .map(response => response.json())
    }

}
