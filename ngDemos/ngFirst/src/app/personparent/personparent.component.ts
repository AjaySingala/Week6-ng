import { Component, OnInit, EventEmitter } from '@angular/core';
import { PEOPLE } from '../person';

@Component({
  selector: 'app-personparent',
  templateUrl: './personparent.component.html',
  styleUrls: ['./personparent.component.scss']
})
export class PersonparentComponent implements OnInit {

  people = PEOPLE;
  master = 'Family - Parent';
  parentExample: string = 'This is from PersonParentComponent';

  // For @Output().
  exampleParent: string;

  constructor() { }

  ngOnInit() {
    // console.log(this.people);
  }

  // For @Output().
  exampleMethodParent($event) {
    console.log('$event', $event);
    this.exampleParent = $event;
    console.log('exampleParent', this.exampleParent);
  }

}
