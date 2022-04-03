import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  GetUserAction,
  SetUser
} from './user.actions';
import {UserService} from './user.service';
import {Injectable} from '@angular/core';
import {
  finalize,
  mergeMap,
  tap
} from 'rxjs/operators';
import produce from 'immer';
import {UpdateFormValue} from '@ngxs/form-plugin';
import {StoreConstants} from '../../../store.constants';
import {UserMapping} from './user.mapping';
import {INgxsForm} from '../../../../app/interfaces/shared.interface';

export interface IPersonStateModel {
  deForm: INgxsForm<IPersonDe>;
}

export interface IPersonDe {
  id?: string;
  name: string;
  email: string;
  bio: string;
  img: string;
}

@State<IPersonStateModel>({
  name: 'user',
  defaults: {
    deForm: { model: undefined }
  }
})

@Injectable()
export class UserState {

  constructor(private _userService: UserService) {
  }

  @Selector()
  public static getUser(state: IPersonStateModel): IPersonStateModel {
    return state;
  }

  @Action(SetUser)
  public setUser(ctx: StateContext<IPersonStateModel>, { payload }: SetUser) {
    ctx.setState(payload);
  }



  @Action(GetUserAction)
  public exciseHsGet(
    { setState, dispatch }: StateContext<IPersonStateModel>,
    {  }: GetUserAction
  ) {
    //todo spinner
    return this._userService
      .getProfile().pipe(
      mergeMap(( data ) =>
        dispatch(
          new UpdateFormValue({
            path: StoreConstants.formPaths.user.de,
            value: UserMapping.toDe(data)
          })
        )
      ),
        //todo dispatch spinner
    );
  }


  /*

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

*/



}
