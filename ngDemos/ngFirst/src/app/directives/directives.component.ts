import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../person';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  people = PEOPLE;

  peopleByCountry: any[] = [
    {
      'country': 'UK',
      'people': [
        {
          "firstname": "Douglas",
          "lastname": "Pace",
          "age": 35
        },
        {
          "firstname": "Mcleod",
          "lastname": "Mueller",
          "age": 32
        },
      ]
    },
    {
      'country': 'US',
      'people': [
        {
          "firstname": "Day",
          "lastname": "Meyers",
          "age": 21
        },
        {
          "firstname": "Aguirre",
          "lastname": "Ellis",
          "age": 34
        },
        {
          "firstname": "Cook",
          "lastname": "Tyson",
          "age": 32
        }
      ]
    },
    {
      'country': 'AU',
      'people': [
        {
          "firstname": "Johnny",
          "lastname": "Bravo",
          "age": 36
        }
      ]
    },
    {
      'country': 'HK',
      'people': [
        {
          "firstname": "John",
          "lastname": "Smith",
          "age": 21
        },
        {
          "firstname": "Mary",
          "lastname": "Jane",
          "age": 34
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
