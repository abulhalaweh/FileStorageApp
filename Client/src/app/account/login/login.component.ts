import { Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { SocialLogin } from '../socialLogin';
import { untilComponentDestroyed } from 'ng2-rx-componentdestroyed';

import { ErrorHandlerService } from '../../../services/errorHandler.service';
import { AccountService } from '../../../services/account.service';
import { AuthService } from 'angular-6-social-login';

@Component({
    selector: 'app-log-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['../account.css']
})

export class LoginComponent implements OnDestroy {

    @ViewChild('logForm') form: NgForm;
    @ViewChild('closeBtn') closeBtn: ElementRef<HTMLElement>;
    private externalSignIn: SocialLogin;

    constructor(private accountSrc: AccountService,
                private errorHandler: ErrorHandlerService,
                private socialAuthSrc: AuthService,
                private route: ActivatedRoute,
                private router: Router) {
    route.queryParams
    .pipe(untilComponentDestroyed(this))
    .subscribe((params) => this.autoOpen(params) );
        this.configSocialLogin();
    }

    public configSocialLogin(): void {
        this.externalSignIn = new SocialLogin(
            this.socialAuthSrc,
            this.accountSrc
        );

        this.externalSignIn.callSuccess
        .pipe(untilComponentDestroyed(this))
        .subscribe(() => {
            this.closeBtn.nativeElement.click();
            this.form.form.enable();
        });

        this.externalSignIn.callFailure
        .pipe(untilComponentDestroyed(this))
        .subscribe((errRes) => {
            this.errorHandler.setServerErrors(errRes, {}, this.form);
        });

        this.externalSignIn.callFormFreeze
        .pipe(untilComponentDestroyed(this))
        .subscribe((freeze: boolean) => {
            this.changeFormState(freeze);
        });
    }

    private changeFormState(freeze: boolean): void {
        if (freeze === true) {
            this.form.form.disable();
        } else {
            this.form.form.enable();
        }
    }

    private autoOpen(params: any): void {
        if (params['redirect'] === 'true') {
          setTimeout(() => {
              document.getElementById('logLink').click();
          }, 200);
        }
    }

    public onSubmit(model: ILoginModel) {
        this.form.form.disable();

        this.accountSrc.getPasswordTokens(model)
        .pipe(untilComponentDestroyed(this))
        .subscribe((res: AuthTokenModel) => {
            this.formReset();
            this.proccessOnSuccess(res);
        }, (errRes) => {
            this.form.form.enable();
            this.errorHandler.setServerErrors(errRes, model, this.form);
        });
    }

    private proccessOnSuccess(model: AuthTokenModel): void {
        this.accountSrc.configureTokens(model);
        this.closeBtn.nativeElement.click();
        this.form.form.enable();
    }

    public formReset(): void {
        this.form.reset();
        this.router.navigate(['/']);
    }

    public goToRegister(): void {
        this.closeBtn.nativeElement.click();
        this.router.navigate( ['/account/register'],
        {
            queryParams: { 'redirect': true },
            skipLocationChange: true
        });
    }

    ngOnDestroy(): void {
    }
}
