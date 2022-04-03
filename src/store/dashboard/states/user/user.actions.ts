import { IPersonStateModel } from './user.state';


export enum UserActionTypes {
  SET = '[SetUser] action',
  GET = '[GetUser] action',
}

export class SetUser {
  public static readonly type = UserActionTypes.SET;
  constructor(public payload: IPersonStateModel) {}
}

export class GetUserAction {
  public static readonly type = UserActionTypes.GET;
}
