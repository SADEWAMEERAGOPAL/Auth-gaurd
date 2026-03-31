import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router,
      private _Authser:AuthService
    ) { }
  
    ngOnInit(): void {
    }
  
    LogOut(){
      localStorage.removeItem('token')
      this._router.navigate([''])
      this._Authser.LoginState$.next(false) 
    }

}
