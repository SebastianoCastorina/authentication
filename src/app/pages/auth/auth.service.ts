import { Injectable } from '@angular/core';
import { ISignin } from './interfaces/signin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IResponse } from './interfaces/iresponse';
import { BehaviorSubject, map, tap } from 'rxjs';
import { ILogin } from './interfaces/ilogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();

  url: string = 'http://localhost:3000';
  signinUrl: string = this.url + '/register';
  loginUrl: string = this.url + '/login';

  private authSubject = new BehaviorSubject<IResponse | null>(null);
  user$ = this.authSubject.asObservable();
  isLogged$ = this.user$.pipe(map((user) => !!user));

  constructor(private http: HttpClient, private router: Router) {}

  signin(data: ISignin) {
    return this.http.post<IResponse>(this.signinUrl, data).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('accessData', JSON.stringify(data));
        const expDate = this.jwtHelper.getTokenExpirationDate(
          data.accessToken
        ) as Date;
      })
    );
  }

  login(data: ILogin) {
    return this.http.post<ILogin>(this.loginUrl, data);
  }
}
