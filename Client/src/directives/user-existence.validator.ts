import { Directive, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[userExists]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: UserExistenceValidator, multi: true}
  ]
})

export class UserExistenceValidator implements Validator {

  constructor(@Attribute('userExists') public expectation: any,
              private apiService: ApiService) {
      this.expectation = this.expectation === 'true';
  }

  validate(form: FormGroup): { [key: string]: any } {
    const emailControl: AbstractControl = form.controls['email'];

    if (emailControl !== undefined) {
      if (emailControl.valid) {
        this.apiService.userExists(emailControl.value).subscribe(res => {
          this.checkResponse(res, emailControl);
        });
      }
    }

    return null;
  }

    private checkResponse(res: boolean, emailControl: AbstractControl): void {
      if (this.expectation === true) {

        if (res === false) {
          emailControl.setErrors({userExists: 'There is no such a user.'});
        }
      } else if (res === true) {
        emailControl.setErrors({userExists: 'A user with such an email already exists.'});
      }
    }
}
