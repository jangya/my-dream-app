import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../shared/common.service";
import { User }          from '../../auth/user';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  currentUser: User;
  ngOnInit() {
    this.commonService.getUserInfo().subscribe(result => {
      this.currentUser = result;
    });
  }

}
