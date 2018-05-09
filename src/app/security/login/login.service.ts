import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/security/login/user';
import { RestService } from 'app/shared/services/rest.service';
import { Router } from '@angular/router';

import * as jwt_decode from 'jwt-decode';
import { ErrorHandler } from 'app/app.error-handler';

@Injectable()
export class LoginService extends RestService<User> {

    user: User;

    constructor(protected http: Http, private router: Router) {
        super(http);
    }

    public getUrl(): string {
        return 'users';
    }

    public mapIdentificador(objeto: User): number {
        return objeto.id_acesso;
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
        if (!token) {return true; }

        const date = this.getTokenExpirationDate(token);

        if (date === undefined) { return false; }

        return !(date.valueOf() > new Date().valueOf());

    }

    loginUser(user: User): Observable<User> {
        return this.http.post(`${this.getUrlBase()}/${this.getUrl()}`, user, this.getDefaultRequestOptions())
            .map(response => response.json())
            .do(users => {
                localStorage.setItem('users', JSON.stringify(users));
                this.user = JSON.parse(localStorage.getItem('users'));
                this.setToken(this.user.token);
            });
    }

    resetUser(id_acesso: number, user: User): Observable<User> {
        return this.atualizarPorId(user , id_acesso);
    //     return this.http.put(`${this.getUrlBase()}/${this.getUrl()}` + '/' + id_acesso , user,
    //   this.getDefaultRequestOptions())
    //         .map(response => response.json())
    //         .do(data => console.log('server data:', data))  // debug
    //         .catch(ErrorHandler.handleError);
    }

    recuperarSenha(email: string): Observable<any> {
        return this.http.post(`${this.getUrlBase()}/${this.getUrl()}/send-email`, email, this.getDefaultRequestOptions())
        .map(response => response.text())
        .do(data => data = data.replace('"', ''))
        .catch(ErrorHandler.handleError);
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
