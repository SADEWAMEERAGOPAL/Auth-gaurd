import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../model/product';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  BaseUrl: string=environment.BaseUrl;
  ProductUrl: string=`${this.BaseUrl}/products.json`;

  constructor(private _http:HttpClient) { }


  fetchAllproduct():Observable<Iproduct[]>{
    return this._http.get(this.ProductUrl).pipe(
      map((obj:any)=>{
        let productArr:Iproduct[]=[]
        for(let key in obj){
          productArr.push({...obj[key], pid:key})
        }
        return productArr
      })
    )
  }


  fetchSingle(id: string):Observable<Iproduct>{
    return this._http.get<Iproduct>(`${this.BaseUrl}/products/${id}.json`)
  }

  createUrl(product: Iproduct):Observable<any>{
    return this._http.post(this.ProductUrl,product)
  }

  deleteUrl(id:string):Observable<any>{
    return this._http.delete(`${this.BaseUrl}/products/${id}.json`)
  }


  updateUrl(upproduct: Iproduct):Observable<Iproduct>{
    return this._http.patch<Iproduct>(`${this.BaseUrl}/products/${upproduct.id}.json`, upproduct)
  }
}
