import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @ViewChild('logInForm') userData: NgForm;
  fullUser;
  private messageToShow: string;

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  logInUser(){
    console.log(this.userData.value)
  
    this.dataservice.logIn(this.userData.value) 
      .subscribe (
        result => {
          if (result !== null) {
            this.fullUser = result
            localStorage.setItem("email", this.fullUser.email)
            localStorage.setItem("firstName", this.fullUser.firstName)
            console.log(this.fullUser)
            this.router.navigateByUrl('/communityshed');
          } else {
            alert ("Invalid credentials. Please try again.")
          }
        },
        error => {
          console.log(error)
          this.messageToShow = "Invalid credentials. Please try again.";
        }
      )
  
  }
}
