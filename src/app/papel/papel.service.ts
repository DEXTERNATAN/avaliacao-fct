import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { MEAT_API } from './../app.api';
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
			.do(response => console.log(response))
			.map(response => response.json())
		//.catch(ErrorHandler.handleError)
	}

	getPapelId(id) {
		return this._http.get(`${MEAT_API}/papel/${id}`)
			.do(response => console.log(response.json()))
			.map(response => response.json())
		//.catch(ErrorHandler.handleError)
	}

	addPapel(papel) {
		return this._http.post(`${MEAT_API}/papel`, JSON.stringify(papel), this.options)
			.do(response => console.log(response.json()))
			.map(res => res.json());
	}

	deletePapel(id) {
		return this._http.delete(`${MEAT_API}/papel/${id}`)
			.do(response => console.log(response.json()))
			.map(response => response.json())
	}

	updateDivisao(id, papel) {
		return this._http.put(`${MEAT_API}/papel/${id}`, JSON.stringify(papel), this.options)
			.do(response => console.log(response.json()))	
			.map(response => response.json())
	}
}
