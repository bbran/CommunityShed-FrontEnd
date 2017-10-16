import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-groupdetailsmembers',
  templateUrl: './groupdetailsmembers.component.html',
  styleUrls: ['./groupdetailsmembers.component.css']
})
export class GroupdetailsmembersComponent implements OnInit {

  members: any[];

  constructor(private dataservice: DataService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.displayMembers()
  }

  displayMembers(){

    this.route.params
    .switchMap((params: Params) => this.dataservice.getGroupMembers(params['id']))
      .subscribe(
        results => {
          if (results !== null) {
            this.members = results
          } else {
            alert ("no results found")
          }
        },
        error => console.log(error)
      )
    console.log(this.members)
  }

}
