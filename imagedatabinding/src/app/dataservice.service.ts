import { Injectable } from '@angular/core';
import {iPurchaseItem} from './purchase/iPurchaseItem';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  getPurchases() : iPurchaseItem[] {
    return [
      {
        Name : "Taazaa",
        Id :1,
        PurchaseDate : "21-10-1990",
        VenderName : "PandeyJi",
        Items : [
          {
            Id : 1,
            Title : "Pen",
            Price : 300,
            ExpiryDate : "10-08-1999",
            isInStock : true,
            Quantity : 30
          },
          {
          Id : 5,
          Title : "Bat",
          Price : 300,
          ExpiryDate : "31-08-1978",
          isInStock : true,
          Quantity : 30
        },
        ]
      },
      {
        Name : "Amazon",
        Id :2,
        PurchaseDate : "01-07-1999",
        VenderName : "Gaurav",
        Items : [
          {
            Id:2,
        Title :"Pencil",
        Price : 56,
        ExpiryDate: "10-10-2021",
        isInStock : false,
        Quantity:40
          },
          {
            Id:20,
        Title :"Ball",
        Price : 560,
        ExpiryDate: "10-10-2021",
        isInStock : false,
        Quantity:40
          }
        ]
      },
      {
        Name : "Microsoft",
        Id :3,
        PurchaseDate : "04-04-2005",
        VenderName : "Harshit",
        Items : [
          {
            Id:3,
        Title :"Screw Driver",
        Price : 267,
        ExpiryDate: "09-02-2020",
        isInStock : false,
        Quantity:900
        }
          
        ]
      },
      {
        Name : "Google",
        Id :4,
        PurchaseDate : "24-13-2021",
        VenderName : "Sachin",
        Items : [
          {
            Id:5,
            Title :"Eraser",
            Price : 24,
            ExpiryDate: "02-10-2020",
            isInStock : false,
            Quantity:9990
          }
        ,
        {
          Id : 5,
          Title : "Bat",
          Price : 300,
          ExpiryDate : "31-08-1978",
          isInStock : true,
          Quantity : 30
        },
        ]
      },
    ]
  }

  getProducts() : any {
    return [
      {
        ID:1,
        Title :"Pen",
        Price : 45,
        ExpiryDate: "09-02-2021",
        isInstock : true,
        Quantity:32
      },
      {
        ID:2,
        Title :"Pencil",
        Price : 56,
        ExpiryDate: "10-10-2021",
        isInstock : false,
        Quantity:40
      },
      {
        ID:3,
        Title :"Screw Driver",
        Price : 267,
        ExpiryDate: "09-02-2020",
        isInstock : false,
        Quantity:900
        },
      {
        ID:4,
        Title :"Paint Brush",
        Price : 245,
        ExpiryDate: "12-10-2020",
        isInstock : true,
        Quantity:78870
        },
        {
          ID:5,
          Title :"Eraser",
          Price : 24,
          ExpiryDate: "02-10-2020",
          isInstock : false,
          Quantity:9990
          },
         ]
  }
}
