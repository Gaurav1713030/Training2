import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IpurchaseItems } from '../purchase/IpurchaseItems';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements OnInit, OnChanges {

  @Input()
  PurchaseItem!: IpurchaseItems;
  Price = 0;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    console.log(this.PurchaseItem);
    this.PurchaseItem.Items.forEach(i=>{
      this.Price = this.Price+i.Price;
    })
  }

}
