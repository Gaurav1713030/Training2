import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedirective',
  templateUrl: './attributedirective.component.html',
  styleUrls: ['./attributedirective.component.css']
})
export class AttributedirectiveComponent implements OnInit {

  constructor() { }

  c : string = 'yellow';
  ngOnInit(): void {
  }

}
