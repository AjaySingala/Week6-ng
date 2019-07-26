import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../person';

@Component({
  selector: 'app-personparent',
  templateUrl: './personparent.component.html',
  styleUrls: ['./personparent.component.scss']
})
export class PersonparentComponent implements OnInit {

  people = PEOPLE;
  master = 'Family - Parent';
    
  constructor() { }

  ngOnInit() {
    // console.log(this.people);
  }
}
