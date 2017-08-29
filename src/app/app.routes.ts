import {Routes,RouterModule} from "@angular/router";

import { LandingPageComponent } from './landing-page/landing-page.component';
import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";

const appRoutes:Routes = [
  // Main redirect
  // {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: LandingPageComponent, pathMatch: 'full'},
  {
    path: '', component: BlankLayoutComponent,
    children: [
      {path: '', component: LandingPageComponent}
    ]
  },
  {path: '**',  redirectTo: ''} 
];
export const AppRouting = RouterModule.forRoot(appRoutes);




// Main redirect
  // {path: '', redirectTo: 'starterview', pathMatch: 'full'},

  // // App views
  // {
  //   path: 'dashboards', component: BasicLayoutComponent,
  //   children: [
  //     {path: 'dashboard1', component: Dashboard1Component},
  //     {path: 'dashboard2', component: Dashboard2Component},
  //     {path: 'dashboard3', component: Dashboard3Component},
  //     {path: 'dashboard4', component: Dashboard4Component},
  //     {path: 'dashboard5', component: Dashboard5Component}
  //   ]
  // },
  // {
  //   path: 'dashboards', component: TopNavigationLayoutComponent,
  //   children: [
  //     {path: 'dashboard41', component: Dashboard41Component}
  //   ]
  // },
  // {
  //   path: '', component: BasicLayoutComponent,
  //   children: [
  //     {path: 'starterview', component: StarterViewComponent}
  //   ]
  // },
  // {
  //   path: '', component: BlankLayoutComponent,
  //   children: [
  //     { path: 'login', component: LoginComponent },
  //   ]
  // },

  // // Handle all other routes
  // {path: '**',  redirectTo: 'starterview'}
