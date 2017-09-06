import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateRouting } from './private.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ServicesModule } from './services/services.module';
import { FlotModule } from '../shared/charts/flotChart';
import { IboxtoolsModule } from '../shared/common/iboxtools/iboxtools.module';
import { PeityModule } from '../shared/charts/peity';
import { SparklineModule } from '../shared/charts/sparkline';
import { JVectorMapModule } from '../shared/map/jvectorMap';
import { ExpenseComponent } from './expense/expense.component';

import { ExpenseService } from './expense/expense.service';
import { CreateExpenseComponent } from './expense/create-expense/create-expense.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ServicesModule,
    ChartsModule, 
    FlotModule,
    IboxtoolsModule,
    NgbModule,
    PeityModule,
    SparklineModule,
    JVectorMapModule,
    PrivateRouting
  ],
  providers: [
    ExpenseService
  ],
  declarations: [DashboardComponent, ExpenseComponent, CreateExpenseComponent]
})
export class PrivateModule { }
