import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  AUTH_URL: string=`https://auth-git-main-iamrkjs-projects.vercel.app`;
  SignUrl: string=`${this.AUTH_URL}/api/auth/register`
  LoginUrl: string=`${this.AUTH_URL}/api/auth/login`

  LoginState$: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false)

  //${this.AUTH_URL}/api/auth/register
  constructor(private _http:HttpClient) { }





  Signup(user: any){
    return  this._http.post(this.SignUrl, user)
  }

  Login(user: any){
    return this._http.post(this.LoginUrl, user)
  }
}
