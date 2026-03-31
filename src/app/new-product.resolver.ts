import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iproduct } from './model/product';
import { ProductService } from './products/product.service';

@Injectable({
  providedIn: 'root'
})
export class NewProductResolver implements Resolve<Iproduct| Iproduct[]> {

  private productser= inject(ProductService)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iproduct | Iproduct[]> {
    let productid=route.params['id'];
    if(productid){
      // Fetch the product data based on the productid
    return    this.productser.fetchSingle(productid)
    }else{
      // Fetch all products data
     return   this.productser.fetchAllproduct()
    }
  }
}
