import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserFormComponent } from './user-dashboard/user-form/user-form.component';
import { UserDetailsComponent } from './user-dashboard/user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ProducDashboardComponent } from './products/produc-dashboard/produc-dashboard.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { GetconfiComponent } from './products/getconfi/getconfi.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDashboardComponent,
    UserFormComponent,
    UserDetailsComponent,
    AuthComponent,
    ProducDashboardComponent,
    ProductFormComponent,
    ProductDetailsComponent,
    GetconfiComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
