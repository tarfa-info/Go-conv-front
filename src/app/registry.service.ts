import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  url = 'http://localhost:8081/create-user';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  public signUp (fullName: string, mail: string, password: string ) {
   return this.http.post(this.url,
      {
      'name': fullName,
      'email': mail,
      'password': password,
      'verified' : false,
      'imagePath' : 'no'
    },
     this.httpOptions);
  }

  public signIn(email, password) {
    return this.http.post('http://localhost:8081/login', {
      'email': email,
      'password': password
    }, this.httpOptions );
  }


}
