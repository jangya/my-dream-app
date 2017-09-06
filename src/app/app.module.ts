import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
// import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { NgbModule }          from '@ng-bootstrap/ng-bootstrap';
import { HomeModule}          from "./home/home.module";
import { ServicesModule}      from "./private/services/services.module";
import { AppComponent }       from './app.component';
import { PageNotFoundComponent }       from './page-not-found.component';
import { AppRoutingModule}          from "./app.routes";

// import { LocationStrategy, HashLocationStrategy} from '@angular/common';
// App views
// import {DashboardsModule} from "./dashboards/dashboards.module";
// import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    ServicesModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }