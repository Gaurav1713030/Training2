
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ValidatorFn, Validators } from '@angular/forms';
import { SenddataService } from '../senddata.service';
import { Product } from '../product/Iproduct'; 
function priceValidation(min:number, max: number) : ValidatorFn
{
  return (control:AbstractControl):{[key:string] : boolean} | null =>
  {
    if((isNaN(control.value) || control.value < min || control.value > max))
    {
      return{'priceRange' : true};
    }
    return null;
  };
}
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
 
  input1: number = 0;
  product: Product;
  min : number = 0;
  max :number = 1000;
  constructor(private senddata: SenddataService) { }
  productEditForm: FormGroup;
  ngOnInit(): void {
    this.senddata.product$.subscribe(data => {
      this.product = data;
    })
    this.productEditForm = new FormGroup({
      Id: new FormControl(this.product?.Id, [Validators.required]),
      Title: new FormControl(this.product?.Title, [Validators.required]),
      Price: new FormControl(this.product?.Price, priceValidation(this.min,this.max)),
      ExpiryDate: new FormControl(this.product?.ExpiryDate, [Validators.required]),
      Quantity: new FormControl(this.product?.Quantity, [Validators.required]),
      inStock: new FormControl(this.product?.isInStock, [Validators.required]),
    });
  }
 
  sendData() {
    this.senddata.setPrice(this.input1);
  }
 
  updateProduct() {
    this.senddata.updateProduct(this.productEditForm.value);
  }
 
}

