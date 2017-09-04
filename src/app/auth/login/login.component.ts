import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  model = new User();
  ngOnInit() {
    this.authService.logout();
  }
  loginUser(){
    console.log("username",this.model);
    this.authService.login(this.model.email,this.model.password)
      .subscribe(result => {
        if (result === true) {
            this.router.navigate(['/app/dashboard']);
        } else {
            // this.error = 'Username or password is incorrect';
            // this.loading = false;
        }
      });
  }
}
