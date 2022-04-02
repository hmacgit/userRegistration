import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  SetAuthDataAction
} from './auth.actions';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

export interface AuthenticationStateModel {
  id: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  authorized: boolean;
}

@State<AuthenticationStateModel>({
  name: 'authStateModule',
  defaults: {
    id: '',
    name: '',
    email: '',
    password: '',
    bio: '',
    authorized: false
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
    return this._authService.getAuth();
  }


}
