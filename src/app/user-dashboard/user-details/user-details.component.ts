import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
userid!: string
userObj: any
  constructor(private route: ActivatedRoute,
    private userService:UserService,
    private  _router: Router
  ) { }

  ngOnInit(): void {
     this.fetchuserDetails()
  }

  fetchuserDetails(){
    this.route.paramMap.subscribe(res=>{
      this.userid=res.get('Userid')!
       this.userService.fetchsingle(this.userid).subscribe(res=>{
      this.userObj=res
    })

    })
   
  }
}
