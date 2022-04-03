import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {
  AuthenticationStateModel,
  AuthStateModule
} from '../store/auth/auth.state';
import {Store} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  auth: AuthenticationStateModel;

  constructor(
    private _authState: AuthStateModule,
    private _store: Store
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.auth = this._store.selectSnapshot<AuthenticationStateModel>(AuthStateModule.getAuthData);

    if (this.auth.loggedIn) {
      return true;
    } else {
      return false;
    }

  }
  
}
