import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;

  constructor() { }

  ngOnInit(): void {
    this.product = this.getProducts();
  }
   getProducts(): any{
     return[
       {  Id: 1,
        title : "Pen",
        Price: 20,
        ExpiryDate: "09-02-2021",
        isInStock: true,
        Quantity: 23

       },
       {
        Id: 2,
        title : "Pencil",
        Price: 30,
        ExpiryDate: "12-02-2011",
        isInStock: false,
        Quantity: 65

       },
       {
        Id: 3,
        title : "Eraser",
        Price: 20,
        ExpiryDate: "08-06=5-2019",
        isInStock: true,
        Quantity: 78
       },
       {
        Id: 4,
        title : "Bat",
        Price: 170,
        ExpiryDate: "26-02-2020",
        isInStock: false,
        Quantity: 90
       },
     ]
   }
}
