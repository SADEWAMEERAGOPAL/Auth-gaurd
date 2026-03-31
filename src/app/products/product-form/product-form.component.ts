import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { SnackbarService } from 'src/app/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanDeactive } from 'src/app/model/candeactive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, CanDeactive {
productForm!: FormGroup
productId!: string
IsInEditMode: boolean=false
  constructor(private _prodser:ProductService,
    private _snackbar: SnackbarService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.createForm()
     this.patchValue()
  }

patchValue(){
  this._routes.paramMap.subscribe(res=>{
   this.productId=res.get('id')!
   if(this.productId){
    this._prodser.fetchSingle(this.productId).subscribe({
      next: data=>{
        this.IsInEditMode=true
        this.productForm.patchValue(data)

      },
      error: err=>{
        console.log(err);
        
      }
    })   }
  })
}

  createForm(){
    this.productForm=new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      stock: new FormControl(null, [Validators.required]),
      rating: new FormControl(null, [Validators.required]),
      canReturn: new FormControl(null, [Validators.required])
      

    })
  }

  OnAddProduct(){
     if(this.productForm.valid){
        let getObj=this.productForm.value;
      console.log(getObj);
      this._prodser.createUrl(getObj).subscribe({
        next: data=>{
          console.log(data)
          this._router.navigate(['products'])
          this._snackbar.opebSnackbar('New Product Added Successfully', 'Close', {})
          this.productForm.reset()
        },
        error: err=>{
          this._snackbar.opebSnackbar('Something Went Wrong', 'Close', {})
        }
      })
     }
      
      
    }

    OnUpdate(){
      if(this.productForm.valid){
        let getUpval=this.productForm.value;
        this._prodser.updateUrl({...getUpval, id:this.productId}).subscribe({
          next: data=>{
            this.IsInEditMode=false
            this._router.navigate(['products'])
            this._snackbar.opebSnackbar('Product Updated Successfully', 'Close', {})
          },
          error: err=>{
            this._snackbar.opebSnackbar('Something Went Wrong', 'Close', {})
          }
        })
      }
    }

    canDeactivate(){
      if(this.productForm.dirty && this.IsInEditMode){
      let getconfim= confirm('You have unsaved changes. Do you really want to leave?')
      return getconfim
      }
      return true
     
  }

  Cadeactiveone(){
    if(this.productForm.dirty&& this.IsInEditMode){
      let getconf=confirm('You have unsaved changes. Do you really want to leave?')
      return getconf
    }
    return true
  }
}

