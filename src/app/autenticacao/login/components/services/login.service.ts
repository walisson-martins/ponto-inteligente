import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Login } from '..';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) {}

  handleLogin(login: Login): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, login);
  }
}
