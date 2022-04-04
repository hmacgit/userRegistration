import {
  AbstractControl,
  ValidationErrors
} from '@angular/forms';



function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

export class uiValidators {

  static required(control: AbstractControl): ValidationErrors | null {
    return isEmptyInputValue(control.value)
      ? {
        msg: 'GLOBAL_VALIDATION_MSG.REQUIRED'
      }
      : null;
  }

  static email(control: AbstractControl): ValidationErrors | null {
    if (isEmptyInputValue(control.value)) {
      return null; // don't validate empty values to allow optional controls
    }
    return EMAIL_REGEXP.test(control.value)
      ? null
      : {
        value: true,
        msg: 'GLOBAL_VALIDATION_MSG.EMAIL'
      };
  }


}