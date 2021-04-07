import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding';
  showDataBindingDemo = true;
  showDirectiveDemo = false;
  showPurchase = false;
  showData = false;
  showAttributeDirective = false;
  showdemo() : void
  {
    this.showDataBindingDemo = true;
    this.showDirectiveDemo = false;
    this.showPurchase = false;
    this.showData = false;
    this.showAttributeDirective = false;
  }

  showdirectivedemo(): void {
    this.showDataBindingDemo = false;
    this.showDirectiveDemo = true;
    this.showPurchase = false;
    this.showData = false;
    this.showAttributeDirective = false;
  }
  showpurchase() : void {
    this.showDataBindingDemo = false;
    this.showDirectiveDemo = false;
    this.showPurchase = true;
    this.showData = false;
    this.showAttributeDirective = false;
  }

  showdata() : void 
  {
    this.showDataBindingDemo = false;
    this.showDirectiveDemo = false;
    this.showPurchase = false;
  
  this.showData = true;
  this.showAttributeDirective = false;
  }

  showattdirective() : void {
    this.showDataBindingDemo = false;
    this.showDirectiveDemo = false;
    this.showPurchase = false;
    this.showData = false;
  this.showAttributeDirective = true;
    
  }
}
