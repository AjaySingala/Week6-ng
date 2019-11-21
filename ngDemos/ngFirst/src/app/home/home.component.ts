import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message: string;
  h1Style = false;
  btnText = '';
  users: object;
  newUsers: User[] = [];
  repos: Repo[] = [];

  constructor(private dataSvc: DataService, private user: User) { }

  ngOnInit() {
    this.message = 'Message goes here.';
  }

  getDataFromService() {
    this.dataSvc.getData()
      .subscribe(data => {
        this.users = data;
        console.log(data);
      });
  }

  getUsers() {

    // // if you use dataSvc.getUser():
    // this.dataSvc.getUsers()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.newUsers = data.data;
    //     console.log(this.newUsers);
    //   });

  //   // if you use dataSvc.getUserList():
  //   this.dataSvc.getUserList()
  //     .subscribe(data => {
  //       console.log(data[0]);
  //       this.newUsers = data[0].data;
  //       console.log(this.newUsers);
  // });

    // If you use dataSvc.getUsers():
    this.dataSvc.getUsers()
      .subscribe(d => {
        d.data.forEach((item, index) => {
          //// If you use dataSvc.getData():
          // var u = new User();
          // u.first_name = item.first_name;
          // u.last_name = item.last_name;
          // this.newUsers.push(u)

          // if you use dataSvc.getUsers():
          this.newUsers.push(item);

          console.log("Item: " + item.first_name);
        });

        console.log("data.data: ", d.data);
        console.log("this.newUsers", this.newUsers);
      });
  }

  
  getRepoList() {
    // if you use dataSvc.getRepoList():
    this.dataSvc.getRepoList()
      .subscribe(data => {
        console.log('data:', data);
        console.log('data[0]:', data[0]);
        this.repos = data;
        console.log('Repos:', this.repos);
  });
  }

  showMessage() {
    this.message = 'Message changed.';
    this.h1Style = !this.h1Style;
    // this.btnText = this.h1Style ? 'John Smith' : '<Enter a name>';

    console.log(this.message);
  }

}
