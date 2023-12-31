import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LogInComponent } from './log-in/log-in.component';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AccountComponent} from "./account/account.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
