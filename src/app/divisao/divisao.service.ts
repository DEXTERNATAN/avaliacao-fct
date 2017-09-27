import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import { Divisao } from './divisao.model';

@Injectable()
export class DivisaoService {

    constructor(private _http: Http){}
    
    divisao(): Observable<Divisao[]> {
        return this._http.get(`${MEAT_API}/divisao`)
        .map(response => response.json())
        //.catch(ErrorHandler.handleError)
    }

    addDivisao(divisao){
        return this._http.post(`${MEAT_API}/divisao`, JSON.stringify(divisao))
          .map(res => res.json());
      }

    deleteDivisao(id){
        console.log(id)
        return this._http.get(`${MEAT_API}/divisao/`)
        //return this._http.get(`${MEAT_API}/divisao/`+id)
        .map(response => response.json())
    }

    // deleteUser(id){
    //     return this.http.delete(this.getUserUrl(id))
    //       .map(res => res.json());
    //   }

    

}
