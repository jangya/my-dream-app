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

import {CommonService} from "./common.service";
import {HttpInterceptor} from "./http-interceptor";

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
    BsDropdownModule.forRoot()
  ],
  providers: [
    CommonService,
    HttpInterceptor
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
