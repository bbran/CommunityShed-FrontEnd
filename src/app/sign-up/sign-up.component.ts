import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  @ViewChild('signUpForm') userData: NgForm;
  fullUser;

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

submitNewUser(){
  console.log(this.userData.value)

  this.dataservice.createNewUser(this.userData.value) 
    .subscribe (
      result => {
        if (result !== null) {
          this.fullUser = result
          localStorage.setItem("email", this.fullUser.email)
          localStorage.setItem("firstName", this.fullUser.firstName)
          this.router.navigateByUrl('/myshed');
        } else {
          alert ("Email is already reagistered. Please register with unique email.")
        }
      },
      error => console.log(error)
    )

}


}
