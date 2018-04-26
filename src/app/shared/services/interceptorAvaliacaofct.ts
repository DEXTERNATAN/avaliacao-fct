import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import * as jwt_decode from 'jwt-decode';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';


@Injectable()
export class AvaliaFctAPIInterceptor implements HttpInterceptor {

    protected TOKEN_NAME = 'jwt_token';
    protected authReq: HttpRequest<any>;
    private token: any;

    constructor() {
        this.token = localStorage.getItem('jwt_token');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

            this.authReq = req.clone({ headers: req.headers.set(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${this.token}`) });

            console.log(this.isTokenExpired(), !this.token);

            if (!this.token && this.isTokenExpired()) {
                console.log('O Token expirou faça login novamente', );
                // this.loginService.handleLogin();
            }

        // Clone the request to add the new header.
        console.log('Sending request with new header now ...');

        // send the newly created request
        return next.handle(this.authReq)
            .catch((error, caught) => {
                // intercept the respons error and displace it to the console
                console.log('Error Occurred');
                console.log(error);
                // return the error to the method that called it
                return Observable.throw(error);
            }) as any;
    }

    getToken(): string {
        return localStorage.getItem(this.TOKEN_NAME);
    }

    setToken(token: string): void {
        localStorage.setItem(this.TOKEN_NAME, token);
    }

    getTokenExpirationDate(token: string): Date {
        const decoded = jwt_decode(token);

        if (decoded.exp === undefined) return null;

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    isTokenExpired(token?: string): boolean {
        if (!token) token = this.getToken();
        if (!token) return true;

        const date = this.getTokenExpirationDate(token);
        if (date === undefined) return false;
        return !(date.valueOf() > new Date().valueOf());
    }

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     console.log('intercepted request ... ');

    //     // if it is a Github API request
    //     if (req.url.includes('api.github.com')) {
    //         // we need to add an OAUTH token as a header to access the Github API
    //         const clone = req.clone({ setHeaders: { 'Authorization': `token ${OAUTH_TOKEN}` } });
    //         return next.handle(clone);
    //     }
    //     // if it's not a Github API request, we just handle it to the next handler
    //     return next.handle(req);
    // }

}
