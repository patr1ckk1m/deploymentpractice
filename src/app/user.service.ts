import { Injectable } from '@angular/core';
import {User} from "./user"; //dont forget to import this manually

import {Http} from "@angular/http"; //do this after successfully transferring data to component to service
//we can now push data to server through http requests
import "rxjs/Rx"; //import this for .map

@Injectable()
export class UserService {

  constructor(public _http: Http) { } //accept _http: as parameter, must add public or error will occur

//define a method to register user which takes one parameter of type User
  registerUser(user: User){
  console.log(user, "user registerUser method")
  //go back to login component.ts
  return this._http.post("/register", user).map(data=>data.json()).toPromise(); //post takes in two parameters, the route you want to post to and data you want to send,
  //we need to convert data to json and convert to promise
  //we need to set the /register post route in routes.js in config

  }
}

