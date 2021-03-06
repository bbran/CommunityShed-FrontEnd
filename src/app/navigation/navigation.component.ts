import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  logOutUser(){
    this.dataservice.logOut() 
      .subscribe (
        result => {
          console.log(result);
          if (result === true) {
            alert("User logged out successfully.")
            console.log("successfully logged out")
            this.router.navigateByUrl('/homepage');
          } else {
            alert ("There has been an error.")
          }
        },
        error => console.log('error: ' + JSON.stringify(error))
      )
     
  }
}
