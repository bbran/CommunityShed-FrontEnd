import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-invitegroupmember',
  templateUrl: './invitegroupmember.component.html',
  styleUrls: ['./invitegroupmember.component.css']
})

export class InvitegroupmemberComponent implements OnInit {


  @ViewChild('inviteGroupMember') userData: NgForm;
  
    constructor(private dataservice: DataService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
    }
  
  inviteNewMember(){
    this.route.params
    .switchMap((params: Params) => this.dataservice.inviteNewGroupMember (this.userData.value, params['id']))
    // need a return value here for this to work. 
    //right now this returns us nothing, so we can't alert the user as to what is happening 
    .subscribe (
        result => {
          console.log(result)
          if (result === null) {
            alert("Member invited successfully.")
            this.router.navigateByUrl('/groupdetails');
          } else {
            alert ("Invite not made.")
          }
        },
        error => console.log(error)
      )
  
  }
  
  
  }
  