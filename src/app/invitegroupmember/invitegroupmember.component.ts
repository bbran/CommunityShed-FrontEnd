import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-invitegroupmember',
  templateUrl: './invitegroupmember.component.html',
  styleUrls: ['./invitegroupmember.component.css']
})

export class InvitegroupmemberComponent implements OnInit {

  groupID;
  @ViewChild('inviteGroupMember') userData: NgForm;
  private messageToShow: string;
  
    constructor(
      private dataservice: DataService, 
      private router: Router, 
      private route: ActivatedRoute,
      private location: Location
    ) { }
  
    ngOnInit() {
    }
  
  inviteNewMember(){
    this.route.params
    .switchMap((params: Params) => this.dataservice.inviteNewGroupMember(this.userData.value, params['id']))
    .subscribe (
        result => {
          console.log(result)
          if (result === true) {
            this.messageToShow = "Invite has been sent!"
          }else {
            this.messageToShow = "Invite not sent. Please try again."
          }
        },
        error => alert("There was an error with this invite and it was not sent. Either the email entered already has a pending request for this group, or this email is not valid. Please re-enter a valid email address.")
      )
  
  }
  
  
  }
  