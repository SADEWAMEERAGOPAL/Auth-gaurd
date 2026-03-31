import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Iproduct } from 'src/app/model/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produc-dashboard',
  templateUrl: './produc-dashboard.component.html',
  styleUrls: ['./produc-dashboard.component.scss']
})
export class ProducDashboardComponent implements OnInit {
productArr!: Iproduct[]

  constructor(private _productser:ProductService,
    private _routes:ActivatedRoute,
    private _router:Router
  ) { 
    // this._routes.data.subscribe(res=>{
    //   this.productArr=res['productArr']
    // })

    this.productArr=this._routes.snapshot.data['productArr']
  }



  ngOnInit(): void {
    //  this.fetchAllproducts()


     
  }


  // fetchAllproducts(){
  //   this._productser.fetchAllproduct().subscribe({
  //     next: data=>{
  //       console.log(data)
  //       this.productArr=data
        
  //     },
  //     error: err=>{
  //       console.log(err)
  //     }
  //   })
  // }

 
}
