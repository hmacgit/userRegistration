import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserRegistrationService} from './user-registration.service';
import {UserRegistrationConstants} from './user-registration.constants';
import {Store} from '@ngxs/store';
import {SetAuthDataAction} from '../../store/auth/auth.actions';
import {AuthService} from '../../store/auth/auth.service';
import {Navigate} from '@ngxs/router-plugin';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  fg: FormGroup;
  controlConstants = UserRegistrationConstants.controls;

  constructor(
    private userReg: UserRegistrationService,
    private _authService: AuthService,
    private _router: Router,
    private _store: Store
  ) { }

  ngOnInit(): void {
    this.fg = this.userReg.dataEntry();
  }

  login() {
    new Navigate(['profile']);
  }

  submit() {
    console.log('submit');
    if (this.fg.valid) {
      console.log((this.fg.value));
      this._store.dispatch(new SetAuthDataAction(this.fg.value));
    } else {
      this.fg.markAllAsTouched();
    }
  }



}
