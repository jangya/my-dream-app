import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { User }          from '../shared/auth/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  userData = new User();
  ngOnInit() {
    this.commonService.getUserInfo().subscribe(result => {
      this.userData = result;
    });
  }

}
