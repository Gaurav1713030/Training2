import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  height =200;
  width =200;
  imgSource = "../assets/front.jpg";

  changeTshirtMouseEnter(): void{
    this.imgSource = "../assets/back.jpg"
  }
  changeTshirtMouseExit(): void{
    this.imgSource = "../assets/front.jpg"
  }
}
