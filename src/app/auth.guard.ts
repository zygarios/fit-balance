import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Route } from "@angular/compiler/src/core";
import { Observable } from "rxjs";
import { AuthService } from "./main-services/auth.service";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    if (this._authService.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
    }
  }
}
