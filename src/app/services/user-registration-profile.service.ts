import { Injectable } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {UserRegistrationProfileConstants} from './user-registration-profile.constants';

import {uiValidators} from '../util/ui-validators'

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationProfileService {

  constructor(private _fb: FormBuilder) { }

  UserRegistrationDataEntry() {
    return this._fb.group({
      [UserRegistrationProfileConstants.controls.id]: null,
      [UserRegistrationProfileConstants.controls.name]: [
        '',
        uiValidators.required,
      ],
      [UserRegistrationProfileConstants.controls.email]: [
        '',
        [
         uiValidators.required,
         uiValidators.email
        ]
      ],
      [UserRegistrationProfileConstants.controls.password]: [
        '',
        uiValidators.required,
      ],
      [UserRegistrationProfileConstants.controls.bio]: [
        '',
        uiValidators.required,
      ],
    });
  }

  UserProfile() {
    return this._fb.group({
      [UserRegistrationProfileConstants.controls.id]: null,
      [UserRegistrationProfileConstants.controls.name]: [
        '',
      ],
      [UserRegistrationProfileConstants.controls.email]: [
        '',
      ],
      [UserRegistrationProfileConstants.controls.bio]: [
        '',
      ],
      [UserRegistrationProfileConstants.controls.img]: [
        '',
      ],
    });
  }



}
