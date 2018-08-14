import {AuthService, GoogleLoginProvider} from 'angular-6-social-login';
import { Output, EventEmitter } from '../../../node_modules/@angular/core';

import { AccountService } from '../../services/account.service';
import { GoogleResponse } from '../../models/google.response.model';

export class SocialLogin {

    private googleResponse: GoogleResponse;
    @Output() callConfirmOption = new EventEmitter();
    @Output() callFormFreeze = new EventEmitter();
    @Output() callSuccess = new EventEmitter();
    @Output() callFailure = new EventEmitter();

    constructor(private socialAuthService: AuthService,
                private accountSrc: AccountService) {
    }

    public googleSignIn(): void {
        const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

        this.socialAuthService.signIn(socialPlatformProvider).then(
          (userData) => {
            this.googleResponse = new GoogleResponse(userData.idToken);
            this.userExists(userData.email);
          }
        );
    }

    private userExists(email: string): void {
        this.accountSrc.userExists(email).subscribe(ex => {
            if (ex === false) {
                this.callConfirmOption.emit();
            } else {
                this.proceedWithLogin('');
            }
        });
    }

    public proceedWithLogin(value: string): void {
        if (value !== 'Cancel') {
            this.googleResponse.RegisterAsDoctor = value === 'Doctor';
            this.callFormFreeze.emit(true);

            this.accountSrc.getAuthorizationCode(this.googleResponse).subscribe((res: any) => {
                const url = String( res.url );
                const index = url.indexOf('=');
                const code = url.substring(index + 1);

                this.accountSrc.getAuthorizationTokens(code).subscribe((res1: AuthTokenModel) => {
                    this.proceedOnSuccess(res1);
                }, (errRes) => {
                    this.callFormFreeze.emit(false);
                    this.callFailure.emit(errRes);
                });
            });
        }
    }

    private proceedOnSuccess(model: AuthTokenModel): void {
        this.accountSrc.configureTokens(model);
        this.callSuccess.emit();
    }
}
