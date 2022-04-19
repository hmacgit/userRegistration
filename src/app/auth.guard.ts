import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  AuthenticationStateModel,
  AuthStateModule
} from '../store/auth/auth.state';
import {Store} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  auth: AuthenticationStateModel;

  constructor(
    private _authState: AuthStateModule,
    private _store: Store
    ) {
    this.auth = this._store.selectSnapshot<AuthenticationStateModel>(AuthStateModule.getAuthData);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.auth.loggedIn) {
      return true;
    } else {
      return false;
    }

  }

  canLoad(route: Route) {

    if (this.auth.loggedIn) {
      return true;
    } else {
      return false;
    }

  }


}
