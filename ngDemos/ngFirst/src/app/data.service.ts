import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    // console.log('DataService.getData() called...');
    return this.http.get('https://reqres.in/api/users');
  }

  getUsers() {
    // console.log('DataService.getData() called...');
    return this.http.get<User>('https://reqres.in/api/users');
  }

  // If it was returning a pure "User" object, i.e.; only the 
  // "data" array property of the api result:
  getUserList() {
    // console.log('DataService.getData() called...');
    return this.http.get<User[]>('https://reqres.in/api/users');
  }
}
