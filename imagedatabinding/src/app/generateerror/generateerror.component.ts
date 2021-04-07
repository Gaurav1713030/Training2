import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generateerror',
  templateUrl: './generateerror.component.html',
  styleUrls: ['./generateerror.component.css']
})
export class GenerateerrorComponent implements OnInit {

  constructor() { }
  errorVariable : any = undefined;

  ngOnInit(): void {
  }
  GenerateError() {
    this.errorVariable.sort();
  }

}
