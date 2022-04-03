import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Store} from '@ngxs/store';
import {SetAuthDataAction} from '../../store/auth/auth.actions';
import {AuthService} from '../../store/auth/auth.service';
import {Navigate} from '@ngxs/router-plugin';
import {Router} from '@angular/router';
import {UserRegistrationProfileConstants} from '../services/user-registration-profile.constants';
import {UserRegistrationProfileService} from '../services/user-registration-profile.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  fg: FormGroup;
  controlConstants = UserRegistrationProfileConstants.controls;

  constructor(
    private userReg: UserRegistrationProfileService,
    private _authService: AuthService,
    private _router: Router,
    private _store: Store
  ) { }

  ngOnInit(): void {
    this.fg = this.userReg.UserRegistrationDataEntry();
  }

  logout() {
    //logout
  }

  submit() {
    if (this.fg.valid) {
      this._store.dispatch(new SetAuthDataAction(this.fg.value));
    } else {
      this.fg.markAllAsTouched();
    }
  }

}
