import { Subscription } from 'rxjs';
import { Component, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AccountService } from '../../../services/account.service';
import { ErrorHandlerService } from '../../../services/errorHandler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialLogin } from '../socialLogin';
import { AuthService } from '../../../../node_modules/angular-6-social-login';
import { untilComponentDestroyed } from 'ng2-rx-componentdestroyed';

@Component({
    selector: 'app-reg-cmp',
    templateUrl: './register.component.html',
    styleUrls: ['../account.css']
})

export class RegisterComponent implements OnDestroy {

  @ViewChild('regForm') form: NgForm;
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
            document.getElementById('regLink').click();
        }, 200);
      }
  }

  public onSubmit(model: IRegisterModel) {
        model.registerAsDoctor = model.registerAsDoctor !== '';
        delete model['confirmPassword'];
        this.form.form.disable();

        this.accountSrc.register(model)
        .pipe(untilComponentDestroyed(this))
        .subscribe((regRes: any) => {
            this.accountSrc.getPasswordTokens(model)
            .pipe(untilComponentDestroyed(this))
            .subscribe((res: AuthTokenModel) => {
                this.formReset();
                this.accountSrc.configureTokens(res);
                this.closeBtn.nativeElement.click();
                this.form.form.enable();
            }, (errRes) => {
                this.processErrors(errRes, model);
            });
        }, (errRes) => {
            this.processErrors(errRes, model);
        });
    }

    private processErrors(errRes: any, model: IRegisterModel): void {
        this.form.form.enable();
        this.errorHandler.setServerErrors(errRes, model, this.form);
    }

    public formReset(): void {
        this.form.reset();
        this.router.navigate(['/']);
    }

    ngOnDestroy(): void {
    }
}
