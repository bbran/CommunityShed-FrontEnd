import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
  }


//   getNewUserInvite(){
//     this.dataservice.getUserInvite(param here)
//       .subscribe(
//         results => {
//           if (results !== null) {
//             this.user = results
//             console.log(this.user)
//           } else {
//             alert ("no results found")         
//         }
//         error => console.log(error)
//       )
      
//   }

// }


  // inviteNewUser(){
  //   console.log(this.userData.value)
  
  //   this.dataservice.convertInvitedUser(this.userData.value) 
  //     .subscribe (
  //       result => {
  //         if (result !== null) {
  //           alert("User created successfully.")
  //           this.router.navigateByUrl('/communityshed');
  //         } else {
  //           alert ("not working")
  //         }
  //       },
  //       error => console.log(error)
  //     )
  
  // }

}
