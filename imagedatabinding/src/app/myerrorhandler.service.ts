import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyerrorhandlerService implements ErrorHandler{

  constructor() { }
  handleError(error : any) {
    console.log("We will handle error later");
  }
}
