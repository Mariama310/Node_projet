import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule } from "@angular/router";
import {LogInComponent } from './log-in/log-in.component';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AccountComponent} from "./account/account.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Account', component: AccountComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
