import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserRegistrationService} from './user-registration.service';
import {UserRegistrationConstants} from './user-registration.constants';
import {Store} from '@ngxs/store';
import {SetAuthDataAction} from '../../store/auth/auth.actions';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  fg: FormGroup;
  controlConstants = UserRegistrationConstants.controls;

  constructor(private userReg: UserRegistrationService, private _store: Store) { }

  ngOnInit(): void {
    this.fg = this.userReg.dataEntry();

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
