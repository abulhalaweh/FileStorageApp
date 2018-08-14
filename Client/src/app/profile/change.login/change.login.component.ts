import { Component, OnDestroy } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

import { untilComponentDestroyed } from 'ng2-rx-componentdestroyed';

import { AccountService } from '../../../services/account.service';
import { ProfileService } from '../../../services/profile.service';
import { ErrorHandlerService } from '../../../services/errorHandler.service';

import { EmailModel } from '../../../models/email.post.model';
import { Profile, PostMethod, ControllerType } from '../../../enums/enum.models';


@Component({
    selector: 'app-change-log-cmp',
    templateUrl: './change.login.component.html',
    styleUrls: ['../shared.profile.css']
})

export class ChangeLoginComponent implements OnDestroy {

    private userName: string;
    public btnBlock: boolean;

    constructor(private profileSrc: ProfileService,
                private accounrSrc: AccountService,
                private errorHandler: ErrorHandlerService) {
        this.userName = this.profileSrc.get(Profile.username);
    }

    public checkUsername(model: NgModel): void {
        if (model.value !== this.userName) {
            model.control.setErrors({userExists: 'The email is incorrect!'});
        }
    }

    public onChange(form: NgForm, email: string): void {
        form.form.disable();
        this.btnBlock = true;
        const model = new EmailModel(email);

        this.profileSrc.postData(
            ControllerType.manage,
            PostMethod.changeLogin,
            model
        )
        .pipe(untilComponentDestroyed(this))
        .subscribe(() => {
            alert('The email has been successfully changed!');
            form.reset();
            this.enableForm(form);
            this.accounrSrc.checkAccountAuth();
        }, (err) => {
            this.enableForm(form);
            this.errorHandler.setServerErrors(err, model, form);
        });
    }

    private enableForm(form: NgForm): void {
        this.btnBlock = false;
        form.form.enable();
    }

    ngOnDestroy(): void {
    }
}
