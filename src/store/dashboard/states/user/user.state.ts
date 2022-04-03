import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  GetUser,
  SetUser
} from './user.actions';

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
export class UserState {
  @Selector()
  public static getUser(state: PersonStateModel): PersonStateModel {
    return state;
  }

  @Action(SetUser)
  public setUser(ctx: StateContext<PersonStateModel>, { payload }: SetUser) {
    ctx.setState(payload);
  }

  @Action(GetUser)
  public getUser(ctx: StateContext<PersonStateModel>, { payload }: GetUser) {
    ctx.setState(payload);
  }




}
