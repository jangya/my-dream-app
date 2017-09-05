import { Injectable }      from '@angular/core';
import { HttpInterceptor } from '../../shared/http-interceptor';
import { Response } from '@angular/http';
import { config }          from '../../app.helpers';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Expense }          from './expense';
import { User }          from '../../auth/user';
import {CommonService} from '../../shared/common.service'

@Injectable()
export class ExpenseService {
  
  constructor(
    private http: HttpInterceptor
  ) {}

  getExpenses(): Observable<Expense[]> {
    return this.http.get(config.baseUrl+'api/expense')
        .map((response: Response) => response.json());

  }
  createExpenses(expense: Expense): Observable<Expense> {
    return this.http.post(config.baseUrl+'api/expense',expense)
        .map((response: Response) => response.json());
  }
}