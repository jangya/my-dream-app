import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {

  constructor(
    private bsModalRef: BsModalRef,
    private router: Router) { }

  ngOnInit() {
  }
  close(){
    this.bsModalRef.hide();
    this.router.navigate(['/expense']);
  }

}
