import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './app-routing.module';
import { NgProgressModule } from 'ng2-progressbar';

// import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { AuthService } from './shared/auth/auth.service';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { RegisterComponent } from './shared/auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { CommonService } from './shared/common.service';
import { HttpInterceptor } from './shared/http-interceptor';

// import { tokenNotExpired } from 'angular2-jwt';

// import { routing,appRoutingProviders } from './app.routes';

// Define the routes
const ROUTES = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgProgressModule,
    RoutingModule // Add routes to the app
  ],
  providers: [
    AuthGuard,
    AuthService,
    CommonService,
    HttpInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
