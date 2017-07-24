import { Component, OnInit } from '@angular/core';
import {User} from "../user";
// import user after making the class
// update User.ts
import {UserService} from "../user.service" //import after creating service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User(); //after updating user.ts, do this line to bind it
  constructor(public _user: UserService) { } //add public _user.... doing this makes it available by setting a parameter as type UserService

  ngOnInit() {
  }

  register() {
    console.log(this.user, "register method login component");
    this._user.registerUser(this.user)
    .then((data)=> {
      console.log(data, "callback from login request");
    })
      .catch((err)=> {
        console.log(err);
      }) //this.user is the user we get from the form
    //at this point data should successfully transfer to component to service
    //we now need to get the data to server through http request in user.service.ts
  }

}

