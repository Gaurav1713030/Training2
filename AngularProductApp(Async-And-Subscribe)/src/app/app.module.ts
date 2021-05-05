import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductwithsubscribeComponent } from './listproductwithsubscribe/listproductwithsubscribe.component';
import { ListproductwithasyncComponent } from './listproductwithasync/listproductwithasync.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from'@angular/material/sidenav';
import {MatIconModule} from'@angular/material/icon';
import {MatToolbarModule} from'@angular/material/toolbar';
import {MatButtonModule} from'@angular/material/button';
import {MatListModule} from'@angular/material/list';
import {MatSelectModule} from'@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddproductComponent,
    ListproductwithsubscribeComponent,
    ListproductwithasyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
MatToolbarModule,
MatButtonModule,
MatIconModule,
MatIconModule,
MatSelectModule,
MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
