import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { ProductFormComponent } from './products/product-form/product-form.component';

@Injectable({
  providedIn: 'root'
})
export class CandiactiveGuard implements CanDeactivate<ProductFormComponent> {
  canDeactivate(
    component: ProductFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }
  
}
