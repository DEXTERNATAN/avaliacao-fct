import { Injectable } from '@angular/core';
import { Route , Router, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from 'app/security/login/login.service';

@Injectable()
export class LoggedInGuard  implements CanLoad  {

    constructor(private loginService: LoginService) {}

    checkAuthentication(path: string): boolean {
        const loggedIn = this.loginService.isLoggedIn();
        if ( !loggedIn ) {
            this.loginService.handleLogin();
        };
        return loggedIn;
    }

    canLoad(route: Route): boolean {
        return this.checkAuthentication(route.path);
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        return this.checkAuthentication(activatedRoute.routeConfig.path);
    }

}
