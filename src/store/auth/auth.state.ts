import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  AuthActionTypes,
  SetAuthDataAction
} from './auth.actions';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {
  finalize,
  mergeMap,
  tap
} from 'rxjs/operators';
import produce from 'immer';
import { Navigate } from '@ngxs/router-plugin';
import {Store} from 'redux';

export interface AuthenticationStateModel {
  id: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  success: boolean;
  loggedIn: boolean;
}

@State<AuthenticationStateModel>({
  name: 'authStateModule',
  defaults: {
    id: '',
    name: '',
    email: '',
    password: '',
    bio: '',
    success: false,
    loggedIn: false,
  }
})

export class LoginFlag {
  static readonly type = AuthActionTypes.LOGIN_FLAG;

  constructor(public payload: boolean) {}
}

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

  @Action(LoginFlag)
  loginFlag({ patchState, dispatch }: StateContext<AuthenticationStateModel>, {payload}: LoginFlag ) {
    patchState({
      loggedIn: payload,
    });
  }

  @Action(SetAuthDataAction)
  public setAuthData({ setState, dispatch }: StateContext<AuthenticationStateModel>, { payload }: SetAuthDataAction) {
    setState(AuthStateModule.setInstanceState(payload));
    //todo dispatch spinner
    return this._authService.getAuth()
      .pipe(
        tap(({ success }) => {
        setState(produce((draft: AuthenticationStateModel) => {
          draft.success = true;
        }));
        }),


        tap(() => setTimeout(() => dispatch(new Navigate(['profile'])), 100)),
        /*
        mergeMap(() => dispatch([
          new Navigate(['profile']),
          new LoginFlag(true)
        ])),
*/
      //todo stop spinner
        finalize(() => dispatch(new Navigate(['profile'])))
    );
  }
/*

  @Action(SetAuthDataAction)
  public setAuthData(ctx: StateContext<AuthenticationStateModel>, { payload }: SetAuthDataAction) {
    ///ctx.setState(AuthStateModule.setInstanceState(payload));
    //todo dispatch spinner
   /!* return this._authService.getAuth()
      .pipe(
        tap(({ success }) => {
          ctx.setState(produce((draft: AuthenticationStateModel) => {
          draft.success = true;
        }));
        }),

        mergeMap(() => ctx.dispatch([
          new Navigate(['profile']),
          new LoginFlag(true)
        ])),

      //todo stop spinner
        finalize(() => ctx.dispatch(new Navigate(['profile'])))
    );*!/
    return ctx.dispatch(new Navigate(['profile']));
  }

*/



}
