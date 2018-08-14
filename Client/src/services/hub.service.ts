import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';

@Injectable()
export class HubService {

    public _hubConnection: HubConnection | undefined;

    public initHubConnection(): Promise<void> {
        this._hubConnection = new signalR.HubConnectionBuilder()
        .withUrl('https://localhost:44386/connectionHub?access_token=' + localStorage.getItem('access_token'))
        .configureLogging(signalR.LogLevel.Information)
        .build();
        this.initHubMethods();
        return this._hubConnection.start();
    }

    private initHubMethods(): void {
        this._hubConnection.on('OnConnectedAsync', (group: string) => {});
        this._hubConnection.on('OnDisconnectedAsync', (group: string) => {});
    }

}
