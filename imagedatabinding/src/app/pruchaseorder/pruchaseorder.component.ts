import { Component, Input, OnInit ,OnChanges} from '@angular/core';
import { iPurchaseItem } from '../purchase/iPurchaseItem';

@Component({
  selector: 'app-pruchaseorder',
  templateUrl: './pruchaseorder.component.html',
  styleUrls: ['./pruchaseorder.component.css']
})
export class PruchaseorderComponent implements OnInit , OnChanges {
  @Input() PurchaseItem : iPurchaseItem;
  Price = 0;
  constructor() {

   }

  ngOnInit(): void {
  }
  
  ngOnChanges() :void {
    console.log(this.PurchaseItem);
    this.PurchaseItem.Items.forEach(i=> {
      this.Price = this.Price + i.Price;
    })
  }
}
