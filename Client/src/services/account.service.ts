import { Injectable, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { HubService } from './hub.service';
import { ApiService } from './api.service';
import { RequestBuilderService } from './requestBuilder.service';

import { GoogleResponse } from '../models/google.response.model';
import { Profile } from '../enums/enum.models';

@Injectable()
export class AccountService extends ApiService implements OnDestroy {

    private refreshSubsc: Subscription;
    private checkSubsc: Subscription;
    @Output() isLoggedOut = new EventEmitter();
    @Output() isLoggedIn = new EventEmitter();

    constructor(protected http: Http,
                protected authService: RequestBuilderService,
                private hubSerivce: HubService) {
        super(http);
        this.checkAccountAuth();
    }

    public configureTokens(data: AuthTokenModel): void {
        this.authService.setTokens(data);
        this.setTokensRefreshTime();
        this.isLoggedIn.emit();
        this.configHub();
    }

    private configHub(): void {
        this.hubSerivce.initHubConnection().then(() => {
            this.connect();
        });
    }

    private connect(): void {
        if (this.hubSerivce._hubConnection) {
            const role = this.get(Profile.role);
            const group = this.getGroup(role);

            if (group !== null) {
                this.hubSerivce._hubConnection.send('OnConnectedAsync', group);
            }
        }
    }

    private disconnect(): void {
        if (this.hubSerivce._hubConnection) {
            const role = this.get(Profile.role);
            const group = this.getGroup(role);

            if (group !== null) {
                this.hubSerivce._hubConnection.send('OnDisconnectedAsync', group);
            }
        }
    }

    private getGroup(role: string): string {
        switch (role) {
            case 'patient':
                return 'PatientsGroup';
            case 'doctor':
                return 'DoctorsGroup';
            default:
                return null;
        }
    }

    public checkAccountAuth(): void {
        const refreshToken = localStorage.getItem('refresh_token');

        if (refreshToken !== null) {
            this.checkSubsc = this.getRefreshTokens()
            .subscribe((res) => {
                this.authService.updateTokens(res);
                this.isLoggedIn.emit();
                this.setTokensRefreshTime();
                this.configHub();
            }, (errRes) => {
                this.isLoggedOut.emit();
            });
        }
    }

    public register(model: IRegisterModel): Observable<Response> {
        return this.http.post(`/api/account/register`, model);
    }

    public getAuthorizationCode(model: GoogleResponse): Observable<Response> {
        return this.http.get(`/external/authorize`,
        {
            headers: this.authService.authHeaders(),
            params: this.authService.externalAuthBody(model.IdToken, model.RegisterAsDoctor)
        });
    }

    public getAuthorizationTokens(code: string): Observable<AuthTokenModel> {
        return this.http.post(`/connect/token`,
                              this.authService.authCodeGrantBody(code),
                              {headers: this.authService.authHeaders()})
                              .pipe( map(res => res.json() ));
    }

    public getPasswordTokens(model: IUser): Observable<AuthTokenModel> {
        return this.http.post(`/connect/token`,
                              this.authService.passwordGrantBody(model),
                              {headers: this.authService.authHeaders()})
                              .pipe( map(res => res.json() ));
    }

    public setTokensRefreshTime(): void {
        this.refreshSubsc = interval( this.authService.getExpMilliseconds() )
            .subscribe(() => {
                this.getRefreshTokens()
                .subscribe((res) => {
                this.authService.updateTokens(res);
            }, (errRes) => {
                this.isLoggedOut.emit();
                this.hubSerivce._hubConnection.stop();
            });
        });
    }

    private getRefreshTokens(): Observable<AuthTokenModel> {
        return this.http.post(`/connect/token`,
                              this.authService.refreshGrantBody(),
                              {headers: this.authService.authHeaders()})
                              .pipe( map(res => res.json() ));
    }

    public logout(): void {
        if (this.refreshSubsc) {
            this.refreshSubsc.unsubscribe();
        }
        this.authService.removeTokens();
        this.disconnect();
        this.hubSerivce._hubConnection.stop();
    }

    ngOnDestroy(): void {
        if (this.refreshSubsc) {
            this.refreshSubsc.unsubscribe();
        }
        if (this.checkSubsc) {
            this.checkSubsc.unsubscribe();
        }
    }
}
