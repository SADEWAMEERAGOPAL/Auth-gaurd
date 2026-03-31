import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  loggeduserRole: string=localStorage.getItem('userRole')!

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRoles = route.data['userRole'] as string[];
    if (requiredRoles.includes(this.loggeduserRole)) {
      return true;
    } else {
      // Handle unauthorized access (e.g., redirect to login or show error)
      return false;
    }
  }
  
}
