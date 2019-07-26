import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

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

    // // if you use dataSvc.getUserList():
    // this.dataSvc.getUsers()
    //   .subscribe(data => {
    //     this.newUsers = data.data;
    //     console.log(newUsers);
    //   });
          
    // If you use either dataSvc.getData() or dataSvc.getUsers():
    this.dataSvc.getUsers()
      .subscribe(data => {
        data.data.forEach((item, index) => {
          //// If you use dataSvc.getData():
          // var u = new User();
          // u.first_name = item.first_name;
          // u.last_name = item.last_name;
          // this.newUsers.push(u)

          // if you use dataSvc.getUsers():
          this.newUsers.push(item);

          console.log("Item: " + item.first_name);
        });

        console.log(data.data);
        console.log(this.newUsers);
      });
  }

  showMessage() {
    this.message = 'Message changed.';
    this.h1Style = !this.h1Style;
    // this.btnText = this.h1Style ? 'John Smith' : '<Enter a name>';

    console.log(this.message);
  }

}
