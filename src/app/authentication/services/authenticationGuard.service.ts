import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuardService implements CanActivate {
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return this.authenticationService.isAuthenticated();
    }
}
