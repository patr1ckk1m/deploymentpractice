import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import {UserService} from "./user.service" //include after making service

const routes: Routes = [
  {path: "", pathMatch: 'full', component: LoginComponent} // do all routing here
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService], //input UserService in here. after inputing we can edit user.service.ts
  bootstrap: [AppComponent]
})
export class AppModule { }
