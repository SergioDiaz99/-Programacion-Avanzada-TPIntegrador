import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCredentials } from '../Models/login/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = undefined;
  redirectUrl: string;

  constructor (private http: HttpClient){

  }

  login(userCredentials : LoginCredentials): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const observable = this.http.post('https://utn2019-avanzada2-tp8.herokuapp.com/login', userCredentials, httpOptions);

    observable.subscribe(
      response => {
      
      this.token = response['jwt'];
      localStorage.setItem('token', this.token);      
    },
      error => {
        
    })

    return observable;
  }

  logout(): void {
    this.token = undefined;
  }
}
