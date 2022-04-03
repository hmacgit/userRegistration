import { Injectable } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {UserRegistrationConstants} from './user-registration.constants';

@Injectable()
export class UserRegistrationService {

  constructor(private _fb: FormBuilder) { }

  dataEntry() {
    return this._fb.group({
      [UserRegistrationConstants.controls.id]: null,
      [UserRegistrationConstants.controls.name]: [
        '',
        //Validators.required
      ],
      [UserRegistrationConstants.controls.email]: [
        '',
        //Validators.required
      ],
      [UserRegistrationConstants.controls.password]: [
        '',
        //Validators.required
      ],
      [UserRegistrationConstants.controls.bio]: [
        '',
        ///Validators.required
      ],
    });
  }

}
