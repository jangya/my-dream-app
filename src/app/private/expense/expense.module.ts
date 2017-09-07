import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { routedComponents, ExpenseRoutingModule } from './expense.routes';
import { AddMembersComponent } from './add-members/add-members.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    ExpenseRoutingModule
  ],
  declarations: [
    routedComponents, 
    AddMembersComponent
  ],
  exports: [AddMembersComponent],
  providers: [BsModalService],
  entryComponents: [
    AddMembersComponent
  ]
})
export class ExpenseModule { }