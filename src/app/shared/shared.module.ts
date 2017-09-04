import { CommonModule } from '@angular/common';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {BsDropdownModule} from 'ngx-bootstrap';

import {BasicLayoutComponent} from "./common/layouts/basicLayout.component";
import {BlankLayoutComponent} from "./common/layouts/blankLayout.component";
import {TopNavigationLayoutComponent} from "./common/layouts/topNavigationlayout.component";

import {NavigationComponent} from "./common/navigation/navigation.component";
import {FooterComponent} from "./common/footer/footer.component";
import {TopNavbarComponent} from "./common/topnavbar/topnavbar.component";
import {TopNavigationNavbarComponent} from "./common/topnavbar/topnavigationnavbar.component";

// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlotModule } from '../shared/charts/flotChart';
import { IboxtoolsModule } from '../shared/common/iboxtools/iboxtools.module';
import { PeityModule } from '../shared/charts/peity';
import { SparklineModule } from '../shared/charts/sparkline';
import { JVectorMapModule } from '../shared/map/jvectorMap';

@NgModule({
  declarations: [
    FooterComponent,
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavigationLayoutComponent,
    TopNavbarComponent,
    TopNavigationNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ChartsModule, 
    FlotModule,
    IboxtoolsModule,
    PeityModule,
    SparklineModule,
    JVectorMapModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    FooterComponent,
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavigationLayoutComponent,
    TopNavbarComponent,
    TopNavigationNavbarComponent
  ],
})

export class SharedModule {}
