import { Injectable, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, interval, Subscription } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { Profile, ControllerType, GetMethod, PostMethod } from '../enums/enum.models';
import { fileDto } from '../models/fileDto';
import { ApiService } from './api.service';
import { HubService } from './hub.service';
import { RequestBuilderService } from './requestBuilder.service';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class FiledbService extends ApiService implements OnDestroy {

  handleError(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(protected http: Http,
    protected authService: RequestBuilderService,
    protected authSrc: RequestBuilderService,
    private hubSerivce: HubService) {
    super(http);
    //this.checkAccountAuth();
  }

  checkAccountAuth(): any {
    throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  // add new file api
  public addFile(model: fileDto): Observable<Response> {
    return this.http.post(`/api/FileDBs/addFile`, model);
  }

  // get all files data
  public getAllFiles(controller: ControllerType, getMethod: GetMethod): Observable<Response> {

    return this.http.get(`/api/` +
      ControllerType[controller] + '/' +
      GetMethod[getMethod],
      { headers: this.authSrc.authFormHeaders() })
      .pipe(map(res => res.json()));
  }

  // for add: POST, delete: DELETE, update: PUT,   check  PostMethod
  public postData(controller: ControllerType,
    postType: PostMethod,
    model: any): Observable<Response> {

    return this.http
      .post(`/api/` +
        ControllerType[controller] + '/' +
        PostMethod[postType],
        model,
        { headers: this.authSrc.authJsonHeaders() });
  }
}
