import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/model/product';
import { SnackbarService } from 'src/app/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfiComponent } from '../getconfi/getconfi.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
productId!: string
productsObj!: Iproduct
  constructor(private _productser: ProductService,
    private _router:Router,
    private _routes:ActivatedRoute,
    private _snackbar:SnackbarService,
    private _matdia:MatDialog

   
    
  ) { 
//  this.productsObj=   this._routes.snapshot.data['product']
//  console.log(this.productsObj)


    this._routes.data.subscribe(res=>{
      this.productsObj=res['product']
    })
  }

   

  ngOnInit(): void {
    console.log(this._routes);
    
    // this.ftechById()
  }


  // ftechById(){
  //   this._routes.paramMap.subscribe(res=>{
  //     this.productId=res.get('id') !
  //     if(this.productId){
  //        this._productser.fetchSingle(this.productId).subscribe({
  //         next:data=>{
  //           console.log(data)
  //           this.productsObj=data
  //         },
  //         error: err=>{
  //           console.log(err)
  //         }
  //        })
  //     }
  //   })
    
  // }

  deleteproduct(){
    let matcon=new MatDialogConfig()
    matcon.width="400px",
    matcon.disableClose=true
    this._matdia.open(GetconfiComponent,matcon).afterClosed().subscribe(res=>{
      if(res){
          this._productser.deleteUrl(this.productId).subscribe({
      next: data=>{
        console.log(data)
        this._router.navigate(['products'])
        this._snackbar.opebSnackbar('product delete successfully', 'Close', {})
      }
      ,
      error: err=>{
        this._snackbar.opebSnackbar('something went wrong', 'Close', {})
        console.log(err)
      }
    })
      }
    })
   
  }
}
