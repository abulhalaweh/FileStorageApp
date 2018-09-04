import { Component, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'

@Component({
  selector: 'upload-component',
  templateUrl: './upload.component.html'
})
export class UploadComponent implements AfterViewInit, OnDestroy {

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");//this.getUserProfile();
  }

  public progress: number;
  public message: string;
  constructor(private http: HttpClient) { }

  upload(files) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', `api/upload`, formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response)
        this.message = event.body.toString();
    });
  }
}
