import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

export class User {
    constructor(
        public email: string,
        public password: string,
        public userName: string,
        public Perfil: string
    ) { }
}

let users = [
    new User('admin@admin.com', 'adm9', 'Natanael de S. Leite', 'administrador'),
    new User('tiago@gmail.com', 'tiago', 'Tiago Oliveira', 'Lider')
];

@Injectable()
export class AuthenticationService {

    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    mostrarMenuEmitter = new EventEmitter<boolean>();

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor(private _router: Router) { }

    login(user: User) {
debugger
        let authenticatedUser = users.find(u => u.email === user.email);
        if (user.userName !== '' && user.password != '') { // {3}
            localStorage.setItem('user', JSON.stringify(authenticatedUser));

            this.loggedIn.next(true);

            //this._router.navigate(['dashboard']);
            return true;
        }

        // let authenticatedUser = users.find(u => u.email === user.email);
        // if (authenticatedUser && authenticatedUser.password === user.password) {
        //     localStorage.setItem('user', JSON.stringify(authenticatedUser));
        //     debugger
        //     this.loggedIn.next(true);

        //     console.log(this.loggedIn);

        //     this.mostrarMenuEmitter.emit(true);
        //     this._router.navigate(['dashboard']);

        // Check whether the token is expired and return
        // true or false
        // return !this.jwtHelper.isTokenExpired(token);

        // }
        return false;
    }


    logout() {
        this.loggedIn.next(false);
        localStorage.removeItem('user');
        this._router.navigate(['login']);
    }

    checkCredentials() {

        if (localStorage.getItem('user') === null) {
            this._router.navigate(['login']);
        }
    }

}
