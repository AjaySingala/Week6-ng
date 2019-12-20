import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // The component accepts a name property.
  @Input() name: string;
  @Input() city: string;
  country: string;

  constructor() { }

  ngOnInit() {
    //this.name = 'Hello there';
    //this.city = 'NYC';
    this.country = 'USA';
  }

}
