import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Url = "https://fakestoreapi.com/auth/login"; // URL to web api
  private AuthObject = {
    "username": "",
   "password": ""
  }
  constructor(private http: HttpClient) { }
  Auth(user:any): Observable<any> {
     this.AuthObject["username"]= user.username
     this.AuthObject["password"]= user.password
     return this.http.post(this.Url, this.AuthObject)
  }
}
