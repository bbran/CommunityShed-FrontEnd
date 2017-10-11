import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  result;

  constructor(private signupservice: SignUpService) { }

  ngOnInit() {
  }

submitNewUser (){

  this.signupservice.createNewUser(userData) 
  .subscribe (
    result => {
      this.result = result
      if (result === true) {
        // route to /communityshed
      } else {
        alert ("Email is already reagistered. Please register with unique email.")
      }
    }
  )

}


}
