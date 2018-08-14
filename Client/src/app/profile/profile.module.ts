import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserInfoComponent } from './userInfo/user.info.component';
import { UsersDataComponent } from './users.data/users.data.component';
import { ChangeLoginComponent } from './change.login/change.login.component';

import { MinValidator } from '../../directives/min.validator.directive';
import { MaxValidator } from '../../directives/max.validator.directive';
import { ValidatorsModule } from '../../directives/validators.module';
import { ChangePasswordComponent } from './change.password/change.password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([]),
    ValidatorsModule
  ],
  declarations: [
    UserInfoComponent,
    UsersDataComponent,
    ChangeLoginComponent,
    ChangePasswordComponent,
    MinValidator,
    MaxValidator
  ]
})

export class ProfileModule { }
