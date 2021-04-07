import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { iPurchaseItem} from '../purchase/iPurchaseItem';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchases : iPurchaseItem[] = [];
  
   constructor(private dataservice : DataserviceService) { }
  ngOnInit(): void {
    this.purchases = this.dataservice.getPurchases();
  }

  

}
