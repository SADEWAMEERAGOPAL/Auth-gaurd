import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 private _router=inject(Router)
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | UrlTree {
      if(localStorage.getItem('token')){
        return true
      }
      else{
      return   this._router.createUrlTree([' '])
      }
   
  }
  
}
