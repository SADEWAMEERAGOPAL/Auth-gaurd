import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserFormComponent } from './user-dashboard/user-form/user-form.component';
import { UserDetailsComponent } from './user-dashboard/user-details/user-details.component';
import { AuthComponent } from './auth/auth.component';
import { ProducDashboardComponent } from './products/produc-dashboard/produc-dashboard.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserRoleGuard } from './user-role.guard';
import { ProductResolver } from './product.resolver';
import { NewProductResolver } from './new-product.resolver';
import { CanDeactiveGuard } from './can-deactive.guard';
import { CandiactiveGuard } from './candiactive.guard';

const routes: Routes = [
  {
  path: "",
  component: AuthComponent
},

  {
  path: "users",
  component: UserDashboardComponent,
  canActivate: [AuthGuard, UserRoleGuard],
  title: "User Dashboard",
   data: {
    userRole: ["admin","SuperAdmin", "Buyer"]
  },
  children: [
     
{
  path: "AddUser",
  component: UserFormComponent
},
{
  path: ":Userid",
  component: UserDetailsComponent
},

{
  path: ":Userid/edit",
  component: UserFormComponent,

},

  ]
},


{
  path: "products",
  component: ProducDashboardComponent,
  resolve: {
    productArr: NewProductResolver
  },
  canActivate: [AuthGuard, UserRoleGuard],
  title: "Product Dashboard",
  data: {
    userRole: [ "Buyer", "admin"]
    
  },

  children: [
    {
      path: "addproduct",
      component: ProductFormComponent
    },
    {
      path: ":id",
      component: ProductDetailsComponent,
      resolve: {
        // product: ProductResolver
        product: NewProductResolver
      }
    },
    {
      path: ":id/edit",
      component: ProductFormComponent,
      // canDeactivate: [CanDeactiveGuard]
      canDeactivate: [CandiactiveGuard]
    }
  ]
},

{
  path: "**",
  component:PageNotFoundComponent,
  data: {
    message: "Page Not Found"
  }
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
