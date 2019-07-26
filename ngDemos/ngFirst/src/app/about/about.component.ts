import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  id: any;

  title: string = 'Pipes and Filters Demo';
  today = new Date();
  jsonval = {name: 'John', age: 28, address: {city: 'New York', state: 'NY'}};
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  price = 3854.50;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => this.id = res.id);
    this.id = this.route.snapshot.params.id;
    console.log(this.id);

  }

  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

  sendMeToContact() {
    this.router.navigate(['/contact']);
    // this.router.navigateByUrl('/contact').then(e => {
    //   if (e) {
    //     console.log("Navigation is successful!");
    //   } else {
    //     console.log("Navigation has failed!");
    //   }
    // });
  }

}
