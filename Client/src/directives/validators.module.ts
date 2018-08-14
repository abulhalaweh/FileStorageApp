import { NgModule } from '@angular/core';
import { EmptyValidator } from './empty.validator.directive';
import { UserExistenceValidator } from './user-existence.validator';

@NgModule({
  imports: [],
  declarations: [
    EmptyValidator,
    UserExistenceValidator
  ],
  exports: [
    EmptyValidator,
    UserExistenceValidator
  ]
})

export class ValidatorsModule { }
