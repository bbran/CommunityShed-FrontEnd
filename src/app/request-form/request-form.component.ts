import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  @ViewChild('requestform') requestData: NgForm;
  
  constructor(private dataservice: DataService, private location: Location, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  requestTool(){
    console.log(this.requestData.value)
      this.route.params
      .switchMap((params: Params) => this.dataservice.requestTool(this.requestData.value, params['id']))
        .subscribe (
          result => {
            if (result !== null) {
              alert("Request has been sent!")
              this.router.navigateByUrl('/communityshed');
            } else {
              alert ("There was a problem with your request")
            }
          },
          error => console.log(error)
        )
  }
}
