import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTraining';
  // a=100;
  // b=200;
  // setWidth():void{
  //   this.a = 100;
  //   this.b = 200;
  // }
  // Title = 'Choose T-shirt';
  // Height = 300;
  // Width = 300;
  // imgSource = '../assets/front.jpg';
  // ChangeTshirtMouseEnter():void{
  //   this.imgSource='../assets/back.jpg';
  // }
  // ChangeTshirtMouseExit():void{
  //   this.imgSource = '../assets/front.jpg'
  isbindingvisivle = true;
  issdvisible = false;
  showProductTable=false;
  showPurchase= false;
  
  showDemo():void{
    this.isbindingvisivle = true;
    this.issdvisible = false;   
    this.showProductTable=false;
    this.showPurchase = false;
  }
 
  showdirectiveDemoFunction(): void{
    this.isbindingvisivle= false;
    this.showProductTable=false;
    this.issdvisible = true;
    this.showPurchase = false;
  }
 
  showProductsTable(): void{
    this.isbindingvisivle = false;
    this.issdvisible = false;
    this.showProductTable = true;
    this.showPurchase = false;
  }
  MasterDetailsFunction(): void{
    this.isbindingvisivle= false;
    this.showProductTable=false;
    this.issdvisible = false;
    this.showPurchase = true;
  }
}

