import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  GetUserAction,
  SetUser
} from './user.actions';
import {UserService} from './user.service';
import {Injectable} from '@angular/core';
import {
  mergeMap,
  tap
} from 'rxjs/operators';
import produce from 'immer';

export interface PersonStateModel {
  id: string;
  name: string;
  email: string;
  bio: string;
  img: string;
}

@State<PersonStateModel>({
  name: 'user',
  defaults: {
    id: '',
    name: '',
    email: '',
    bio: '',
    img: ''
  }
})

@Injectable()
export class UserState {

  constructor(private _userService: UserService) {
  }

  @Selector()
  public static getUser(state: PersonStateModel): PersonStateModel {
    return state;
  }

  @Action(SetUser)
  public setUser(ctx: StateContext<PersonStateModel>, { payload }: SetUser) {
    ctx.setState(payload);
  }

  @Action(GetUserAction)
  public getUser({ setState, dispatch }: StateContext<PersonStateModel>) {
    return this._userService
      .getProfile()
      .pipe(
        tap((payload) => {
          setState(produce((draft: PersonStateModel) => {
            draft = payload;
          }));
        }),
        mergeMap(() => {
          return dispatch([
            //todo stop spinner
          ]);
        })
      );
  }




}
