import { Component } from '@angular/core'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imagedatabinding';
  showDataBindingDemo = true;
  showDirectiveDemo= false;
  showdemo() : void
  {
    this.showDataBindingDemo = true;
   this.showDirectiveDemo = false;
  }

  showdirectivedemo(): void{
    this.showDataBindingDemo = false;
    this.showDirectiveDemo = true;
  }

}
