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
    dispatch(new Navigate(['profile']));
    setState(AuthStateModule.setInstanceState(payload));
    //todo dispatch spinner
    return this._authService.getAuth()
      .pipe(
        tap(({ success }) => {
        setState(produce((draft: AuthenticationStateModel) => {
          draft.success = true;
        }));
        }),

        /*
        mergeMap(() => dispatch([
          new Navigate(['profile']),
          //new LoginFlag(true)
        ])),
      */
        mergeMap(() => {
          return dispatch(new Navigate(['profile']));
        }),

      //todo stop spinner
        finalize(() => dispatch(new Navigate(['profile'])))
    );
  }


}
