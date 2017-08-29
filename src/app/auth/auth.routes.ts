import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import {BlankLayoutComponent} from "../components/common/layouts/blankLayout.component";


const authRoutes: Routes = [  
  {
    path: 'user', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegisterComponent },
      { path: 'logout', component: LoginComponent },
    ]
  }
];

export const AuthRouting = RouterModule.forChild(authRoutes);