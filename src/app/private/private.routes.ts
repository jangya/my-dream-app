import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseComponent } from './expense/expense.component';
import { AuthGuard } from '../auth/auth.guard';
import { BasicLayoutComponent } from "../shared/common/layouts/basicLayout.component";
// import { BlankLayoutComponent } from "../components/common/layouts/blankLayout.component";


const privateRoutes: Routes = [  
  {
    path: 'app', component: BasicLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'expense', component: ExpenseComponent }
    ]
  }
];

export const PrivateRouting = RouterModule.forChild(privateRoutes);