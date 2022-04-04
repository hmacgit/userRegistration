import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import {
  EMPTY,
  Observable
} from 'rxjs';
import {Store} from '@ngxs/store';
import {GetUserAction} from '../../store/dashboard/states/user/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolveService implements Resolve<any> {
  constructor(private _store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
      return this._store.dispatch(new GetUserAction())
  }
}
