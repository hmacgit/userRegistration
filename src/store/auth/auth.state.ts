import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  SetAuthDataAction
} from './auth.actions';

export interface AuthenticationStateModel {
  id: string;
  name: 'name',
  email: 'email',
  password: 'password',
  bio: 'bio'
}

@State<AuthenticationStateModel>({
  name: 'authStateModule',
  defaults: {
    id: '',
    name: 'name',
    email: 'email',
    password: 'password',
    bio: 'bio'
  }
})
export class AuthStateModule {
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
  }


}
