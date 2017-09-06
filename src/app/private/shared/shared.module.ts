import { CommonModule } from '@angular/common';
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BsDropdownModule} from 'ngx-bootstrap';

import {BasicLayoutComponent} from "./layouts/basicLayout.component";
import {BlankLayoutComponent} from "./layouts/blankLayout.component";
import {TopNavigationLayoutComponent} from "./layouts/topNavigationlayout.component";
import {IboxtoolsModule} from './iboxtools/iboxtools.module';
import {NavigationComponent} from "./navigation/navigation.component";
import {FooterComponent} from "./footer/footer.component";
import {TopNavbarComponent} from "./topnavbar/topnavbar.component";
import {TopNavigationNavbarComponent} from "./topnavbar/topnavigationnavbar.component";

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
    CommonModule,
    RouterModule,
    IboxtoolsModule,
    NgbModule,
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
