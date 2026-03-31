import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
UserArr!: any[]
  constructor(private _router: Router,
    private _Authser:AuthService,
    private _userser: UserService
  ) { }

  ngOnInit(): void {
    this.fetchAlluser()
  }


  fetchAlluser(){
    this._userser.fetchAlluser().subscribe(res=>{
      this.UserArr=res
    })
  }
 
}
