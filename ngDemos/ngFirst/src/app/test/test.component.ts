import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
   templateUrl: './test.component.html',
  // template: '<h1>This is from the component directly</h1>',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  title = 'Angular7-unit-testing!';
  
  constructor() { }

  ngOnInit() {
  }

  foo() {
    return 'OK';
  }

}
