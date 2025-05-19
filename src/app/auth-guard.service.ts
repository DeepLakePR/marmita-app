import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): MaybeAsync<GuardResult> {
        
        return this.authService.isAuthenticated().then(

            (authenticated: Boolean) => {{
                if(authenticated) {
                    return true;

                }else {
                    this.router.navigate(['/']);

                    return false;

                }
            }}

        )

    }

}
