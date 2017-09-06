import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Expense, ExpenseService } from '../../services';
import 'jquery-slimscroll';

declare var jQuery:any;

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent {
  expenses: Expense[];
  constructor(private router: Router, private expenseService: ExpenseService) {}

  ngOnInit() {
    this.expenseService.getExpenses().subscribe(resultFromExpense => {
      this.expenses = resultFromExpense;
    });
  }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery("body").hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }


}
