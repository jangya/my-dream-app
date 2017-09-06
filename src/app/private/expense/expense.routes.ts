import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseComponent } from './expense.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { BasicLayoutComponent } from '../shared/layouts/basicLayout.component';

const routes: Routes = [
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      {
        path: 'all',
        component: ExpenseComponent,
      },
      {
        path: 'create',
        component: CreateExpenseComponent,
      }
    ],
    data: {title: 'Dashboard'} 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }

export const routedComponents = [ExpenseComponent, CreateExpenseComponent];