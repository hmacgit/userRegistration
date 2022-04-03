import { PersonStateModel } from './user.state';


export enum UserActionTypes {
  SET = '[SetUser] action',
  GET = '[GetUser] action',
}

export class SetUser {
  public static readonly type = UserActionTypes.SET;
  constructor(public payload: PersonStateModel) {}
}

export class GetUser {
  public static readonly type = UserActionTypes.GET;
  constructor(public payload: PersonStateModel) {}
}
