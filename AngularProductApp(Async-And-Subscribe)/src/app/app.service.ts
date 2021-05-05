import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  AddToProductList(product1: { id: number; title: string; price: number; quantity: number; colour: string; isStock: boolean; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }
 
  getProducts() :Observable<Product[]> {
    const apiurl = environment.apibaseurl;
    const headers = {'content-type' : 'application/json'};
 
    return this.http.get<Product[]>(apiurl,{'headers': headers}).pipe(
      tap(data=>{console.log(data)}),
      catchError(error=>{
        return throwError(error)
      })
    );
  }
  addProduct(task :Product) : Observable<Product>{
    const apiurl = environment.apibaseurl;
    const headers = {'content-type' : 'application/json'};
    Object.defineProperty(task,'id',{'enumerable':false});
    const taskDto = JSON.stringify(task);
    return this.http.post<Product>(apiurl, taskDto, {headers: headers})
    .pipe(
      tap((task : any) => {
        console.log(task)
      }),
      catchError(this.handleError)
    );
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error('Method not implemented.');
  }
}