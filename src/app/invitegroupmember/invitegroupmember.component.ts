import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitegroupmember',
  templateUrl: './invitegroupmember.component.html',
  styleUrls: ['./invitegroupmember.component.css']
})
export class InvitegroupmemberComponent implements OnInit {

  @ViewChild('inviteGroupMember') userData: NgForm;
  
    constructor(private dataservice: DataService, private router: Router) { }
  
    ngOnInit() {
    }
  
  // inviteNewGroupMember(){
  //   console.log(this.userData.value)
  
  //   this.dataservice.inviteNewMember(this.userData.value) 
  //     .subscribe (
  //       result => {
  //         if (result !== null) {
  //           alert("Member invited successfully.")
  //           // this.router.navigateByUrl('/groupdetails');
  //         } else {
  //           alert ("Invite not made.")
  //         }
  //       },
  //       error => console.log(error)
  //     )
  
  // }
  
  
  }
  