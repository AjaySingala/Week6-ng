import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-personchild',
  templateUrl: './personchild.component.html',
  styleUrls: ['./personchild.component.scss']
})
export class PersonchildComponent implements OnInit {
  @Input() person: Person;
  @Input('master') mastername: string;

  constructor() {}

  ngOnInit() {
    // console.log(this.person);
  }
}
