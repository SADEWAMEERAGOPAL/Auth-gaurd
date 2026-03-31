import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Auth-gaurd';

  LoginState: boolean=false;

  constructor(private  _Authser: AuthService){
    
  }

  ngOnInit(): void {
    this._Authser.LoginState$.subscribe(flag=>{
      this.LoginState=flag

      if(localStorage.getItem('token')){
        this._Authser.LoginState$.next(true)
      }
    })
  }

}
