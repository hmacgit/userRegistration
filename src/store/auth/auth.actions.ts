import { AuthenticationStateModel } from './auth.state';
import {Injectable} from '@angular/core';

export enum AuthActionTypes {
  SET = '[Auth] Set Auth data',
  LOGIN_FLAG = '[Auth] LoginFlag'
}

export class SetAuthDataAction {
  public static readonly type = AuthActionTypes.SET

  constructor(public payload: AuthenticationStateModel) {}
}
