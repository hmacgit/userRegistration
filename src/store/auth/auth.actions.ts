import { AuthenticationStateModel } from './auth.state';

export enum AuthActionTypes {
  SET = '[Auth] Set Auth data',
}

export class SetAuthDataAction {
  public static readonly type = AuthActionTypes.SET

  constructor(public payload: AuthenticationStateModel) {}
}
