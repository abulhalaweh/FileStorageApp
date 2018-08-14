import { Component, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { untilComponentDestroyed } from 'ng2-rx-componentdestroyed';

import { ProfileService } from '../../../services/profile.service';
import { ErrorHandlerService } from '../../../services/errorHandler.service';

import { UserType, ControllerType, GetMethod, PostMethod } from '../../../enums/enum.models';

@Component({
    selector: 'app-user-info-cmp',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css', '../shared.profile.css']
})

export class UserInfoComponent implements AfterViewInit, OnDestroy {

    @ViewChild('profileForm') form: NgForm;
    public userType: string;
    public isModelEqual: boolean;

    constructor(private profileSrc: ProfileService,
                private errorHandler: ErrorHandlerService) {
        this.isModelEqual = true;
        this.userType = UserType[ this.profileSrc.UserType ];
    }

    ngAfterViewInit(): void {
        this.getUserProfile();
    }

    private getUserProfile(): void {
        if (this.profileSrc.User === undefined) {
            this.profileSrc.getData(ControllerType.profile, GetMethod.info).subscribe((res) => {
                this.profileSrc.User = res;
                this.setUserProfile();
            });
        } else {
            setTimeout(() => {
                this.setUserProfile();
            }, 20);
        }
    }

    private setUserProfile(): void {
        this.actionOnModel((modelValue, cntrlValue, prop) => {
            return this.setFormControl(modelValue, cntrlValue, prop);
        });
    }

    private setFormControl(modelValue, cntrlValue, prop): boolean {
        if (modelValue !== null) {
            this.form.controls[prop].setValue(modelValue);
        }
        return false;
    }

    public onChnage(): void {
        this.actionOnModel((modelValue, cntrlValue, prop) => {
            return this.compareControlModelValue(modelValue, cntrlValue, prop);
        });
    }

    public compareControlModelValue(modelValue, cntrlValue, prop): boolean {
        if (cntrlValue === modelValue) {
            return !(this.isModelEqual = true);
         } else {
             return !(this.isModelEqual = false);
         }
    }

    private actionOnModel(action: (modelValue, cntrlValue, prop) => boolean): void {
        const props = Object.keys(this.profileSrc.User);
        const controls = this.form.controls;

        for (let i = 0; i < props.length; i++) {
            const prop = props[i] === 'userName' ? 'email' : props[i];
            const modelValue = this.profileSrc.User[props[i]];
            const cntrlValue = controls[prop].value;

            const res = action(modelValue, cntrlValue, prop);
            if (res) { return; }
        }
    }

    public onSaveChanges(): void {
        this.actionOnModel((modelValue, cntrlValue, prop) => {
            return this.reassignValues(modelValue, cntrlValue, prop);
        });

        this.profileSrc.postData(
            ControllerType.profile,
            PostMethod.editProfile,
            this.profileSrc.User
        )
        .pipe(untilComponentDestroyed(this))
        .subscribe(() => {
            alert('Profile changed!');
            this.isModelEqual = true;
        }, (err) => {
            this.errorHandler.setServerErrors(err, this.profileSrc.User, this.form);
        });
    }

    private reassignValues(modelValue, cntrlValue, prop): boolean {
        this.profileSrc.User[prop] = cntrlValue;
        return false;
    }

    ngOnDestroy(): void {
    }
}
