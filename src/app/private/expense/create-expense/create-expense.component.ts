import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Expense, ExpenseService }  from "../../services";
import { AddMembersComponent } from '../add-members/add-members.component';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {
  
  
  constructor(
    private expenseService: ExpenseService,
    private router: Router,
    private modalService: BsModalService
  ) {}
  expense = new Expense();
  ngOnInit() {

  }
  createExpense(){
    // this.modalService.show(AddMembersComponent);
    this.expenseService.createExpenses(this.expense).subscribe(result => {
      this.expense = result;
      this.modalService.show(AddMembersComponent);
      //this.router.navigate(['/expense']);
    });
  }
}