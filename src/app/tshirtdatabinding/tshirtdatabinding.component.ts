import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirtdatabinding',
  templateUrl: './tshirtdatabinding.component.html',
  styleUrls: ['./tshirtdatabinding.component.css']
})
export class TshirtdatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Data-Binding-Demo';
  a=100;
  b=200;
  setWidth():void{
    this.a = 100;
    this.b = 200;
  }
  Title = 'Choose T-shirt';
  Height = 300;
  Width = 300;
  imgSource = '../assets/front.jpg';
  ChangeTshirtMouseEnter():void{
    this.imgSource='../assets/back.jpg';
  }
  ChangeTshirtMouseExit():void{
    this.imgSource = '../assets/front.jpg'
}
}
