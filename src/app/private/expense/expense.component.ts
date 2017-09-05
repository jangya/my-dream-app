import { Component, OnInit } from '@angular/core';
import {ExpenseService} from "./expense.service";
import { Expense }          from './expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: Expense[];

  constructor(
    private expenseService: ExpenseService
  ) {}
  
  ngOnInit() {
      this.expenseService.getExpenses().subscribe(resultFromExpense => {
        this.expenses = resultFromExpense;
      });
  }
}
