import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

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

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private _router: Router) { }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['login']);
  }

  login(user) {

    let authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      this.mostrarMenuEmitter.emit(true);
      this._router.navigate(['']);
      return true;
    }

    return false;

  }

  // checkCredentials() {
  //   if (localStorage.getItem('user') === null) {
  //     this._router.navigate(['login']);
  //   }
  // }

}
