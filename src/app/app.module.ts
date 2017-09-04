import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppRouting} from "./app.routes";
import { AppComponent } from './app.component';

// App views
import {DashboardsModule} from "./dashboards/dashboards.module";
import {AuthModule} from "./auth/auth.module";

// App modules/components
import {SharedModule} from "./shared/shared.module";
import {PrivateModule} from "./private/private.module";
import {HomeModule} from "./home/home.module";
import {LandingPageComponent} from "./home/landing-page/landing-page.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    SharedModule,
    PrivateModule,
    AuthModule,
    AppRouting
  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }