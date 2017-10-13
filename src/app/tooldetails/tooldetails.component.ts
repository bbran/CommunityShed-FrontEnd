import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-tooldetails',
  templateUrl: './tooldetails.component.html',
  styleUrls: ['./tooldetails.component.css']
})
export class TooldetailsComponent implements OnInit {

  tool: object;

  constructor(private dataservice: DataService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getToolDetails()
  }

  getToolDetails(){
    this.route.params
    .switchMap((params: Params) => this.dataservice.getToolDetails(params['id']))
      .subscribe(
        results => {
          if (results !== null) {
            this.tool = results
            console.log(this.tool)
          } else {
            alert ("no results found")
          }
        },
        error => console.log(error)
      )
    console.log(this.tool)
  }

}
