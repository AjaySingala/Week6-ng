import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-personchild',
  templateUrl: './personchild.component.html',
  styleUrls: ['./personchild.component.scss']
})
export class PersonchildComponent implements OnInit {
  @Input() person: Person;
  // @Input('master') mastername: string;
  @Input() childExample: string;

  // Pass data back from child to parent.
  @Output() exampleOutput = new EventEmitter<string>();
  exampleChild: string = 'This is from child to parent using @Output() decorator.';

  constructor() {}

  ngOnInit() {
    // console.log(this.person);
  }

  exampleMethodChild() {
    this.exampleOutput.emit(this.exampleChild);
  }
}
