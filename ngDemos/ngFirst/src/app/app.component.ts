import { Component } from '@angular/core';

// // For Query child component using ViewChild, ViewChildren.
// import { AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
// import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngFirst';
  name = 'This is from "app-component"';
}

// // Query child component using ViewChild.
// export class AppComponent implements AfterViewInit {
//   title = 'ngFirst';
//   name = 'This is from "app-component"';
//   city = 'Orlando';

//   // For ViewChild.
//   @ViewChild(ChildComponent) hello: ChildComponent;

//   // Updating HTML Elements Template References.
//   @ViewChild('pRef') pRef: ElementRef;

//   // For ViewChildren.
//   @ViewChildren(ChildComponent) names: QueryList<any>;

//   // The ngAfterViewInit() life-cycle hook.
//   ngAfterViewInit(): void {
//     // For ViewChild.
//     console.log('Hello!', this.hello.name, this.hello.city, this.hello.country);
    
//     // Updating HTML Elements Template References.
//     this.pRef.nativeElement.innerHTML = 'DOM updated successfully!!!';
    
//     // For ViewChildren.
//     this.names.forEach(name => console.log(name));
//     console.log('Cities...');
//     this.names.forEach(name => console.log(name.city));
//   }
// }
