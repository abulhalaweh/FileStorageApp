import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AccountService } from '../../services/account.service';
import { RequestBuilderService } from '../../services/requestBuilder.service';
import { ApiService } from '../../services/api.service';
import { ErrorHandlerService } from '../../services/errorHandler.service';

import { SocialLoginModule, AuthServiceConfig} from 'angular-6-social-login';
import { getAuthServiceConfigs } from './socialloginConfig';
import { ValidatorsModule } from '../../directives/validators.module';
import { EqualValidator } from '../../directives/equal.validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SocialLoginModule,
    ValidatorsModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    ConfirmationComponent,
    EqualValidator
  ],
  exports: [],
  providers: [
    AccountService,
    RequestBuilderService,
    ApiService,
    ErrorHandlerService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ]
})

export class AccountModule { }
