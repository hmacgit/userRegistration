import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserRegistrationProfileConstants} from '../services/user-registration-profile.constants';
import {UserRegistrationProfileService} from '../services/user-registration-profile.service';
import {AuthService} from '../../store/auth/auth.service';
import {Router} from '@angular/router';
import {
  Select,
  Store
} from '@ngxs/store';
import {GetUserAction} from '../../store/dashboard/states/user/user.actions';
import {StoreConstants} from '../../store/store.constants';
import {UserState} from '../../store/dashboard/states/user/user.state';
import {LoginFlag} from '../../store/auth/auth.actions';
import {Navigate} from '@ngxs/router-plugin';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  fg: FormGroup;
  controlConstants = UserRegistrationProfileConstants.controls;
  ngxsPath = StoreConstants.formPaths.user.de;

  @Select(UserState.getImage) imageUrl$: any;

  constructor(
    private userReg: UserRegistrationProfileService,
    private _authService: AuthService,
    private _router: Router,
    private _store: Store
  ) { }

  ngOnInit(): void {
    this.fg = this.userReg.UserProfile();
  }


  logout() {
    this._store.dispatch([
      new LoginFlag(false),
      new Navigate(['login'])
    ]);
  }

}
