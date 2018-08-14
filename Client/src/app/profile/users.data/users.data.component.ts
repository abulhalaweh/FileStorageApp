import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { untilComponentDestroyed } from 'ng2-rx-componentdestroyed';

import { ProfileService } from '../../../services/profile.service';

import { EmailModel } from '../../../models/email.post.model';
import { GetMethod, ControllerType, PostMethod } from '../../../enums/enum.models';

@Component({
  selector: 'app-users-data-cmp',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})

export class UsersDataComponent implements OnDestroy {

  public items: Array<Array<any>>;
  public addedUsers: boolean;

  constructor(private http: Http,
              private profileSrc: ProfileService,
              private route: ActivatedRoute) {
        this.items = [];
        route.queryParams
        .pipe(untilComponentDestroyed(this))
        .subscribe((params) => {
            this.addedUsers = params['addedOnes'] === 'true';
            this.processParam(params['addedOnes']);
        });
    }

    private processParam(addedOnes: string): void {
        const getMethod = addedOnes === 'true' ?
        GetMethod.getUserFiles : GetMethod.getAllFiles;

        if (getMethod === GetMethod.getAllFiles) {

            if (this.profileSrc.AllUsers.length === 0) {
                this.getData(getMethod)
                .subscribe(() => {
                    this.profileSrc.AllUsers = this.items;
                });
            } else {
                this.setDataTable(this.profileSrc.AllUsers, false);
            }

        } else if (getMethod === GetMethod.getUserFiles) {

            if (this.profileSrc.RelatedUsers.length === 0) {
                this.getData(getMethod)
                .subscribe(() => {
                    this.profileSrc.RelatedUsers = this.items;
                });
            } else {
                this.setDataTable(this.profileSrc.RelatedUsers, false);
            }
        }
    }

    private getData(getMethod: GetMethod): Observable<void> {
        return this.profileSrc.getData(
            ControllerType[this.profileSrc.UserRole],
            getMethod
        ).pipe( map((data: Array<any>) => {
                this.setDataTable(data);
            }),
            untilComponentDestroyed(this)
        );
    }

    private setDataTable(data: Array<any>, receivedFromServer: boolean = true): void {
        this.profileSrc.setHeaders();
        this.items = this.profileSrc.setValues(data, receivedFromServer);
    }

    public actionOnClick(event): void {
        const email = this.getEmail(event);
        const model = new EmailModel( email );
        const btnName = String( $(event.target).attr('name') );
        $(event.target).attr('disabled', true);

        if (PostMethod[btnName] !== undefined) {

            this.profileSrc.postData(
                ControllerType[this.profileSrc.UserRole],
                PostMethod[btnName],
                model
            )
            .pipe(untilComponentDestroyed(this))
            .subscribe(() => {
                alert('Success!');
                $(event.target).attr('disabled', false);
                this.onSuccess(btnName, email);
            }, (err) => {
                $(event.target).attr('disabled', false);
                this.actionErrorResult(err);
            });
        }
    }

    private onSuccess(btnName: string, email: string): void {
        if (btnName === 'addUser') {
            this.addOnClicked(email);
        } else if (btnName === 'deleteUser') {
            this.deleteOnCLicked(email);
        }
    }

    private addOnClicked(email: string): void {
        const user = this.findUser(email);
        if (user !== null) {
            const exists = this.profileSrc.RelatedUsers.includes(user);

            if (exists === false) {
                this.profileSrc.RelatedUsers.push(user);
            } else {
                alert('This user is already added!');
            }
        }
    }

    private deleteOnCLicked(email: string): void {
        const user = this.findUser(email);
        const index = this.profileSrc.RelatedUsers.indexOf(user);
        this.profileSrc.RelatedUsers.splice(index, 1);
    }

    private findUser(email: string): Array<any> {
        for (let i = 0; i < this.profileSrc.AllUsers.length; i++) {
            const userProperties = this.profileSrc.AllUsers[i];

            for (let j = 0; j < userProperties.length; j++) {
                if (userProperties[j] === email) {
                    return userProperties;
                }
            }
        }
    }

    private getEmail(event): string {
        return $(event.target).closest('.tableRow').children()[3].innerText;
    }

    private actionErrorResult(err): void {
        if (err.text() !== '') {
            alert(err.text());
        } else {
            alert('Unexpected server error, try againg later, please');
        }
    }

  ngOnDestroy(): void {
  }
}
