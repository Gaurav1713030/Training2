import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SdbComponent } from './sdb/sdb.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PruchaseorderComponent } from './pruchaseorder/pruchaseorder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ChangecolorDirective } from './changecolor.directive';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { SharedataComponent } from './sharedata/sharedata.component';
import { HomeComponent } from './home/home.component';
import { GenerateerrorComponent } from './generateerror/generateerror.component';
import { MyerrorhandlerService } from './myerrorhandler.service';
import { LoginComponent } from './login/login.component';
import { ProductsearchPipe } from './productsearch.pipe';
import { CustompipePipe } from './custompipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SdbComponent,
    ProductComponent,
    PurchaseComponent,
    PruchaseorderComponent,
    Child1Component,
    Child2Component,
    ChangecolorDirective,
    AttributedirectiveComponent,
    SharedataComponent,
    HomeComponent,
    GenerateerrorComponent,
    LoginComponent,
    ProductsearchPipe,
    CustompipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  providers: [{ provide:ErrorHandler, useClass :MyerrorhandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
