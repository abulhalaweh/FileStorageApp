import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { Profile } from '../enums/enum.models';

@Injectable()
export class ApiService {

    constructor(protected http: Http) {
    }

    public userExists(email: string): Observable<boolean> {
        return this.http.get(`/api/account/checkUser?Email=` + email)
                        .pipe(map(res => res.json() ) );
    }

    public get(prop: Profile): string {
        const token = localStorage.getItem('id_token');

        try {
            return jwt_decode(token)[Profile[prop]].toLowerCase();
        } catch (Error) {
            return null;
        }
    }
}
