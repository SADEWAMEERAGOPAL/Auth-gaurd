import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
LoginMode:boolean=false;


SignUpForm!: FormGroup;
LoginForm!: FormGroup

  constructor(private _Authser: AuthService,
    private _snackbar: SnackbarService,
    private _router:Router
  ) { }

  ngOnInit(): void {
      this.createform()
      this.CreateLogin()
  }


  createform(){
    this.SignUpForm=new FormGroup({
        email: new FormControl(null, [Validators.required]),
       password: new FormControl(null, [Validators.required]),
        userRole: new FormControl(null, [Validators.required])
    })
  }

  CreateLogin(){
        this.LoginForm=new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  } 
 
 

  

LogIn(){
  if(this.LoginForm.valid){
    let getobj=this.LoginForm.value;
    this._Authser.Login(getobj).subscribe({
      next: (data:any)=>{
        this._snackbar.opebSnackbar(data.message, "Close", {})
         localStorage.setItem('token', data.token)
         localStorage.setItem('userRole', data.userRole)
         this._Authser.LoginState$.next(true)
         this.LoginForm.reset()
          this._router.navigate(['users'])
  } ,    
      
      error: err=>{
        this._snackbar.opebSnackbar(err.message, 'Close', {})
      }
    })
    
  }
 

}

Signup(){
  if(this.SignUpForm.valid){
    let getUserval=this.SignUpForm.value;
     console.log(this.SignUpForm.value);
    

     this._Authser.Signup(getUserval).subscribe({
      next: (data:any)=>{
        this._snackbar.opebSnackbar(data.message, 'Close', {})
        this.LoginMode=true
      },
      error: err=>{
        this._snackbar.opebSnackbar(err.message, 'Close', {})
        console.log(err);
      }
     })

  }
   

}
}
