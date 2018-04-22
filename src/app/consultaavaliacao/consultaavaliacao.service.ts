import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from './../app.api';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { Consultaavaliacao } from './consultaavaliacao.model';
import { RestService } from '../shared/services/rest.service';
import { Router } from '@angular/router';
import { Avaliacao } from '../avaliacao/avaliacao.model';

@Injectable()
export class ConsultaavaliacaoService  extends RestService<Avaliacao>  {
    // headers: Headers;
    // options: RequestOptions;

    // constructor(private _http: Http) {
    //     this.headers = new Headers({
    //         'Content-Type': 'application/json',
    //         'Accept': 'q=0.8;application/json;q=0.9'
    //     });
    //     this.options = new RequestOptions({ headers: this.headers });
    // }

    avaliacao: Avaliacao;

    constructor(protected http: Http, private router: Router) {
        super(http);
    }

    public getUrl(): string {
        return 'users';
    }

    public mapIdentificador(objeto: Avaliacao): number {
        return objeto.id_resultado;
    }


    getBuscaDetalhesAvaliacao(id: number): Observable<Consultaavaliacao[]> {
        return this.http.get(`${MEAT_API}/avaliacao/${id}/resultado`, this.getDefaultRequestOptions())
            .map(response => response.json());
    }
}
