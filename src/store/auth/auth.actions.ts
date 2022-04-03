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

export class LoginFlag {
  static readonly type = AuthActionTypes.LOGIN_FLAG;
  constructor(public payload: boolean) {}
}
