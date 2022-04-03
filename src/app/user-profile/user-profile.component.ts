import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserRegistrationProfileConstants} from '../services/user-registration-profile.constants';
import {UserRegistrationProfileService} from '../services/user-registration-profile.service';
import {AuthService} from '../../store/auth/auth.service';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  fg: FormGroup;
  controlConstants = UserRegistrationProfileConstants.controls;

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
    //logout
  }

}
