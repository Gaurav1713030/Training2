import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imagedatabinding';
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
