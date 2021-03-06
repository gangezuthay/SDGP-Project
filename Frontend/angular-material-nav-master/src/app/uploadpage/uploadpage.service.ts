import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {url_response} from './uploadpage.model';

import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from '../../api_url';

@Injectable({
  providedIn: 'root'
})

export class UploadpageService {

  private baseurl = API_URL + '/upload-url';

  constructor(private http: HttpClient) { }

  getUploadUrl() : Observable<url_response>{
    return this.http.get<url_response>(this.baseurl)
    //.pipe(map(response => response.url));

  }

  uploadFile(file:File, uploadurl:string): Observable<boolean> {
    const headers = new HttpHeaders({
        'Content-Type': 'text/csv'
      })
    return this.http
      .put(uploadurl, file, { headers } )
      .pipe(map(() => {return true; }));
}
}