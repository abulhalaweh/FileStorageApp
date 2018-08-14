import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { untilComponentDestroyed } from 'ng2-rx-componentdestroyed';

import { AccountService } from '../../../services/account.service';
import { ProfileService } from '../../../services/profile.service';
import { ErrorHandlerService } from '../../../services/errorHandler.service';

import { ChangePasswordModel } from '../../../models/change.password.model';
import { ControllerType, PostMethod } from '../../../enums/enum.models';

@Component({
    selector: 'app-change-pass-cmp',
    templateUrl: './change.password.component.html',
    styleUrls: ['../shared.profile.css']
})

export class ChangePasswordComponent implements OnDestroy {

    public btnBlock: boolean;

    constructor(private profileSrc: ProfileService,
                private accounrSrc: AccountService,
                private errorHandler: ErrorHandlerService) {
        this.btnBlock = false;
    }

    public onChange(form: NgForm): void {
        const model = new ChangePasswordModel(
            String( form.value.CurrentPassword ),
            String( form.value.NewPassword )
        );
        form.form.disable();
        this.btnBlock = true;

       this.profileSrc.postData(
            ControllerType.manage,
            PostMethod.changePassword,
            model
        )
        .pipe(untilComponentDestroyed(this))
        .subscribe(() => {
            alert('The password has been successfully changed!');
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
