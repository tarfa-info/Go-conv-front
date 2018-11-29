import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpLoadService {

  formData: FormData = new FormData();
  httpOptions = {

    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'reportProgress': 'true',
      'responseType': 'text'
    })
  };

  constructor(private http: HttpClient) { }

  public uploadFile(s: File) {

    this.formData.append('file' , s , s.name);
    return this.http.post('http://localhost:8083/upload', this.formData, this.httpOptions);
  }
}
