import { Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { User } from 'app/security/login/user';

@Injectable()
export class LoginService {

    user: User;

    constructor(private http: Http, private router: Router) {}

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post('http://www.mocky.io/v2/5a31529d2e00001029e3b48a', { email: email, password: password })
        .map(response => response.json())
        .do(user => this.user = user);
    }

    handleLogin() {
        this.router.navigate(['/login']);
    }

    logout(){
        this.user = undefined;
        this.router.navigate(['/login']);
    }

}
