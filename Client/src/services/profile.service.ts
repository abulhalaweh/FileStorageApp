import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

import { ApiService } from './api.service';
import { RequestBuilderService } from './requestBuilder.service';
import { HubService } from './hub.service';
import { MappingService } from './mapping.service';

import { Profile, UserType, ControllerType, GetMethod, PostMethod } from '../enums/enum.models';

@Injectable()
export class ProfileService extends ApiService {

    public User: any;
    public UserRole: string;
    public UserType: UserType;
    public AllUsers: Array<Array<any>>;
    public RelatedUsers: Array<Array<any>>;
    public Headers: Array<any>;

    constructor(protected http: Http,
                protected authSrc: RequestBuilderService,
                private hubSrc: HubService,
                private mappingSrc: MappingService) {
        super(http);
        this.UserRole = this.get(Profile.role);
        this.UserType = this.getUserType();
        this.AllUsers = [];
        this.RelatedUsers = [];
        this.Headers = [];
        this.initHubMethods();
    }

    private initHubMethods(): void {
        this.hubSrc._hubConnection.on('OnNewUserAdded', (user: any) => {
            this.addUser(user);
        });
    }

    private addUser(user: any): void {
        const valuesArray = this.mappingSrc.ParseObject(user, this.UserType);
        if (this.AllUsers.length !== 0) {
            this.AllUsers.push(valuesArray);
        }
    }

    public setHeaders(): void {
        if (this.Headers.length === 0) {
            this.Headers = this.mappingSrc.getProps(this.UserType);
        }
    }

    public setValues(data: Array<any>, receivedFromServer: boolean): any[] {
        if (data.length !== 0) {
            if (receivedFromServer === true) {
                return this.mappingSrc.parseObjects(data, this.UserType);
            } else {
                return data;
            }
        } else {
            return [];
        }
    }

    public getData(controller: ControllerType, getMethod: GetMethod):  Observable<Response> {

        return this.http.get(`/api/` +
        ControllerType[controller] + '/' +
        GetMethod[getMethod],
        {headers: this.authSrc.authFormHeaders()})
        .pipe( map(res => res.json() ));
    }

    public postData(controller: ControllerType,
                    postType: PostMethod,
                    model: any): Observable<Response> {

        return this.http
        .post(`/api/` +
        ControllerType[controller] + '/' +
        PostMethod[postType],
        model,
        {headers: this.authSrc.authJsonHeaders()});
    }

    private getUserType(): any {
        switch (this.UserRole) {
            case 'patient':
                return UserType.Patient;
            case 'doctor':
                return UserType.Doctor;
            default:
                return UserType.Admin;
        }
    }
}
