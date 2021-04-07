import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }
  height = 200;
  width = 200;
  a: any= undefined;
  
  //color : string = 'black';
  imgSource = '../assets/front.png';
  
  

    changeTshirtMouseEnter():void {
      this.imgSource = '../assets/back.png';
    }

    changeTshirtMouseExit():void {
      this.imgSource = '../assets/front.png';
    }
//     generate(): void {
//       //this.handelEror()
//     }
 }
