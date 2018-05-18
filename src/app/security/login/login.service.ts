import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'app/security/login/user';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { MEAT_API } from '../../app.api';
import { Observable } from 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
        }
    )
};


@Injectable()
export class LoginService implements OnInit {

    user: User;
    protected TOKEN_NAME = 'jwt_token';

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) { }

    ngOnInit(): void {
        console.log('Login service start');
    }

    isLoggedIn(): boolean {
        let tokenExpirado = this.isTokenExpired(this.getToken());
        return (this.user !== undefined && !tokenExpirado);
    }

    getToken(): string {
        return localStorage.getItem(this.TOKEN_NAME);
    }

    setToken(token: string): void {
        localStorage.setItem(this.TOKEN_NAME, token);
    }

    getTokenExpirationDate(token: string): Date {
        const decoded = jwt_decode(token);

        if (decoded.exp === undefined) { return null; }

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    isTokenExpired(token?: string): boolean {
        if (!token) { token = this.getToken(); }
        if (!token) { return true; }

        const date = this.getTokenExpirationDate(token);

        if (date === undefined) { return false; }

        return !(date.valueOf() > new Date().valueOf());

    }

    loginUser(user: User): Observable<any> {
        let body = JSON.stringify(user);
        return this.httpClient.post(`${MEAT_API}/users/`, body, httpOptions)
            .do(users => {
                localStorage.setItem('users', JSON.stringify(users));
                this.user = JSON.parse(localStorage.getItem('users'));
                this.setToken(this.user.token);
            });
    }

    resetUser(id_acesso: number, user: User) {

        let body = JSON.stringify(user);
        return this.httpClient.put(`${MEAT_API}/users/` + id_acesso, body, httpOptions);

    }

    recuperarSenha(email: string) {
        return this.httpClient.post(`${MEAT_API}/users/` + '0', email);
    }

    handleLogin() {
        this.router.navigate(['/login']);
    }

    logout() {
        this.user = undefined;
        this.router.navigate(['/login']);
        localStorage.removeItem('users');
        localStorage.clear();
    }

}
