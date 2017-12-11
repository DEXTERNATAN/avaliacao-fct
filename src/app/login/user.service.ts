import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from 'app/login/login.service';

@Injectable()
export class UserService {
    constructor(private _http: Http) {}

    getAll() {
        return this._http.get('/api/user', this.jwt()).map((response: Response) => response.json());
    }

    private jwt(): any {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Autorization': 'Bearer' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

}