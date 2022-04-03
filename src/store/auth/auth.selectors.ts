import {Selector} from '@ngxs/store';
import {
  AuthenticationStateModel,
  AuthStateModule
} from './auth.state';
import {state} from '@angular/animations';


export class AuthSelectors {
  @Selector([AuthStateModule.getAuthData])
  static getLogin() {
    return state;
  }
}