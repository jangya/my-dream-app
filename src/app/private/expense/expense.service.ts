import { Injectable }      from '@angular/core';
import { HttpInterceptor } from '../../shared/http-interceptor';
import { Response } from '@angular/http';
import { config }          from '../../app.helpers';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Expense }          from './expense';

@Injectable()
export class ExpenseService {
  // Notice we inject "our" HttpClient here, naming it Http so it's easier
  constructor(private http: HttpInterceptor) { }

  getExpenses(): Observable<Expense> {
    // setTimeout(()=>{this.pService.done()}, 4000);
    // get users from api
        // return this.http.get('/api/users', options)
        //     .map((response: Response) => response.json());
    return this.http.get(config.baseUrl+'api/expense')
        .map((response: Response) => response.json());

  }
}