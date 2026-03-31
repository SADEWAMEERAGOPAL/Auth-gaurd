import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Iproduct } from "./model/product";
import { ProductService } from "./products/product.service";

@Injectable({
    providedIn:'root'
})

export class ProductResolver implements Resolve<Iproduct>{


    constructor(private _productser:ProductService){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iproduct | Observable<Iproduct> | Promise<Iproduct> {
         let productid:string=route.params['id'];
            // Fetch the product data based on the productid
            return this._productser.fetchSingle(productid)
    }
}