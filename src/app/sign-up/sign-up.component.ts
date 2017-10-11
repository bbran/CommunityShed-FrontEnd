import { Component, OnInit, ViewChild } from '@angular/core';
import { SignUpService } from '../sign-up.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  @ViewChild('signUpForm') userData: NgForm;

  constructor(private signupservice: SignUpService, private router: Router) { }

  ngOnInit() {
  }

submitNewUser(){
  console.log(this.userData.value)

  this.signupservice.createNewUser(this.userData.value) 
    .subscribe (
      result => {
        if (result === true) {
          alert("User created successfully.")
          this.router.navigateByUrl('/communityshed');
        } else {
          alert ("Email is already reagistered. Please register with unique email.")
        }
      },
      error => console.log(error)
    )

}


}
