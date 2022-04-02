import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  SetAuthDataAction
} from './auth.actions';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {
  mergeMap,
  tap
} from 'rxjs/operators';
import produce from 'immer';
import { Navigate } from '@ngxs/router-plugin';

export interface AuthenticationStateModel {
  id: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  success: boolean;
}

@State<AuthenticationStateModel>({
  name: 'authStateModule',
  defaults: {
    id: '',
    name: '',
    email: '',
    password: '',
    bio: '',
    success: false
  }
})

@Injectable()
export class AuthStateModule {

  constructor(private _authService: AuthService) {
  }

  @Selector()
  public static getAuthData(state: AuthenticationStateModel): AuthenticationStateModel {
    return AuthStateModule.getInstanceState(state);
  }

  private static setInstanceState(state: AuthenticationStateModel): AuthenticationStateModel {
    return { ...state };
  }

  private static getInstanceState(state: AuthenticationStateModel): AuthenticationStateModel {
    return { ...state };
  }

  @Action(SetAuthDataAction)
  public setAuthData({ setState, dispatch }: StateContext<AuthenticationStateModel>, { payload }: SetAuthDataAction) {
    setState(AuthStateModule.setInstanceState(payload));
    //todo dispatch spinner
    return this._authService.getAuth().pipe(
      tap(({ success }) => {
        setState(produce((draft: AuthenticationStateModel) => {
          draft.success = true;
        }));
      }),
      mergeMap(({ success }) => dispatch([
        //todo stop spinner
        new Navigate(['profile']),
        //new LoginFlag(true)
      ]))
    );
  }


}
