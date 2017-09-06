import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AuthRoutingModule, routedComponents} from './auth.routes';

@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports:[routedComponents]
})

export class AuthModule {
}
