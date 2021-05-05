import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from 'src/product';
 
@Component({
  selector: 'app-listproductwithsubscribe',
  templateUrl: './listproductwithsubscribe.component.html',
  styleUrls: ['./listproductwithsubscribe.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListproductwithsubscribeComponent implements OnInit, OnDestroy {
  products : Product[] = [];         
  @Input() items$ : Observable<Product[]>;    
  productsubscription : Subscription;
  constructor(private appservice: AppService, private cd: ChangeDetectorRef) { 
    this.productsubscription = new Subscription();
    this.items$ = new Observable<Product[]>();
  }
 
  ngOnInit(): void {
    this.productsubscription = this.items$.subscribe(
      data=>{
        this.products = data
        this.cd.markForCheck();
      },
      error=>{
        console.log(error);
      },
      ()=>console.log('complete')
    )
  }
 
  ngOnDestroy() {
    if(this.productsubscription)
    {
      this.productsubscription.unsubscribe();
    }
  }
}



// import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
// import { Observable, Subscription } from 'rxjs';

// import { Product } from 'src/product';
// import { AppService } from '../app.service';



 
// @Component({
//   selector: 'app-listproductwithsubscribe',
//   templateUrl: './listproductwithsubscribe.component.html',
//   styleUrls: ['./listproductwithsubscribe.component.css'],
//   changeDetection : ChangeDetectionStrategy.OnPush
// })
// export class ListproductwithsubscribeComponent implements OnInit, OnDestroy {
//   @Input() items$: Observable<Product[]>;
//   products : Product[]=[];
  
//   productsubscription : Subscription;
//   constructor(private appservice: AppService, private cd: ChangeDetectorRef) { 
//     this.productsubscription = new Subscription();
//     this.items$ = new Observable<Product[]>();
//   }
 
//   ngOnInit(): void {
//     this.productsubscription = this.appservice.getProducts().subscribe(
//       data=>{
//         this.products = data
//         this.cd.markForCheck();
//       },
//       error=>{
//         console.log(error);
//       },
//       ()=>console.log('complete')
//     )
//     this.items$ = this.appservice.getProducts();
//   }
 
//   ngOnDestroy() {
//     if(this.productsubscription)
//     {
//       this.productsubscription.unsubscribe();
//     }
//   }
// }