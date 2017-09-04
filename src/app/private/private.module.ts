import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateRouting } from './private.routes';

// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlotModule } from '../shared/charts/flotChart';
import { IboxtoolsModule } from '../shared/common/iboxtools/iboxtools.module';
import { PeityModule } from '../shared/charts/peity';
import { SparklineModule } from '../shared/charts/sparkline';
import { JVectorMapModule } from '../shared/map/jvectorMap';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ChartsModule, 
    FlotModule,
    IboxtoolsModule,
    PeityModule,
    SparklineModule,
    JVectorMapModule,
    PrivateRouting
  ],
  declarations: [DashboardComponent, ExpenseComponent]
})
export class PrivateModule { }
