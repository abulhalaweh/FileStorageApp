import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class RequestBuilderService {

    private readonly client_id: string;

    constructor(private http: Http) {
      this.client_id = '719762341905-nsgda0ahgf2loco1mte1jrtbgpu5gg0d.apps.googleusercontent.com'; //'6839ef20b75817b79109';
    }

    // for requesting secure data using json
    public authJsonHeaders() {
        const header = new Headers();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        header.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        return header;
    }

    public authFormHeaders() {
        const header = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        header.append('Accept', 'application/json');
        header.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        return header;
    }

    public authHeaders(): Headers {
        const headers = new Headers(
        {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        return headers;
    }

    public passwordGrantBody(model: IUser): string {
        let body = '';
        body += 'client_id=' + this.client_id + '&';
        body += 'grant_type=password&';
        body += 'username=' + model.email + '&';
        body += 'password=' + model.password + '&';
        body += 'scopes=openid profile offline_access roles';
        return body;
    }

    public externalAuthBody(id_token: string, registerAsDoctor: boolean): string {
        let body = '';
        body += 'client_id=' + this.client_id + '&';
        body += 'response_type=code&';
        body += 'state=' + Math.random().toString(36).substring(3) + '&';
        body += 'scopes=openid profile offline_access roles&';
        body += 'redirect_uri=https://localhost:44386&';
        body += 'id_token=' + id_token + '&';
        body += 'registerAsDoctor=' + registerAsDoctor;
        return body;
    }

    public authCodeGrantBody(code: string): string {
        let body = '';
        body += 'client_id=' + this.client_id + '&';
        body += 'grant_type=authorization_code&';
        body += 'redirect_uri=https://localhost:44386&';
        body += 'code=' + code + '&';
        body += 'scopes=openid profile offline_access roles&';
        return body;
    }

    public refreshGrantBody(): string {
        let body = '';
        body += 'client_id=' + this.client_id + '&';
        body += 'grant_type=refresh_token&';
        body += 'refresh_token=' + localStorage.getItem('refresh_token') + '&';
        return body;
    }

    public setTokens(resData: AuthTokenModel): void {
        localStorage.setItem('access_token', resData.access_token);
        localStorage.setItem('id_token', resData.id_token);
        localStorage.setItem('refresh_token', resData.refresh_token);
        localStorage.setItem('expires_in', resData.expires_in.toString());
    }

    public updateTokens(resData: any): void {
        localStorage.setItem('access_token', resData.access_token);
        localStorage.setItem('id_token', resData.id_token);
        localStorage.setItem('expires_in', resData.expires_in);

        if (resData.refresh_token !== undefined) {
            localStorage.setItem('refresh_token', resData.refresh_token);
        }
    }

    public getExpMilliseconds(): number {
        return Number( localStorage.getItem('expires_in') ) * 1000;
    }

    public removeTokens(): void {
        localStorage.clear();
    }

    // showTokens() {
    //     console.log('access_token ' + localStorage.getItem('access_token') );
    //     console.log('id_token ' + localStorage.getItem('id_token') );
    //     console.log('refresh_token ' + localStorage.getItem('refresh_token') );
    //     console.log('expires_in ' + localStorage.getItem('expires_in') );
    // }
}
