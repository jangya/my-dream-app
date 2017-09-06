import { NgModule } from '@angular/core';

import { routedComponents, ExpenseRoutingModule } from './expense.routes';

@NgModule({
  imports: [ExpenseRoutingModule],
  declarations: [routedComponents]
})
export class ExpenseModule { }