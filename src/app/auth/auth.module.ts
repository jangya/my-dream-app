import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {AuthRouting} from './auth.routes';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRouting
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  exports:[LoginComponent]
})

export class AuthModule {
}
