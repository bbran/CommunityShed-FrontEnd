import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-invitenewuser',
  templateUrl: './invitenewuser.component.html',
  styleUrls: ['./invitenewuser.component.css']
})
export class InvitenewuserComponent implements OnInit {

  @ViewChild('inviteNewUserForm') 
  userData: NgForm;
  user;

  constructor(
    private dataservice: DataService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getNewUserInvite()
  }

  getNewUserInvite(){

   this.route.params
      .switchMap((params: Params) => this.dataservice.getUserInvite(params['inviteKey']))

      .subscribe(
        results => {
          if (results !== null) {
            this.user = results
            console.log(this.user)
          } else {
            alert ("no results found")         
        }
      }
      )
      
  }


  inviteNewUser(userData: NgForm){ ///could be user:NgForm
    console.log(this.userData.value)

    this.route.params
    .switchMap((params: Params) => this.dataservice.convertInvitedUser(params['inviteKey'], this.userData.value))
  
      .subscribe (
        result => {
          if (result !== null) {
            alert("User created successfully.")
            this.router.navigateByUrl('/mygroup');
          } else {
            alert ("not working")
          }
        },
        error => console.log(error)
      )
  
  }

}