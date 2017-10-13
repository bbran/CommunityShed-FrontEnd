import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-mygroups',
  templateUrl: './mygroups.component.html',
  styleUrls: ['./mygroups.component.css']
})
export class MygroupsComponent implements OnInit {

  groups: any[];

  @Input() groupsID;
  
  constructor(private dataservice: DataService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.displayMyGroups()
  }

  displayMyGroups(){
    // this.route.params
    //   .switchMap((params: Params) => this.dataservice.getToolDetails(params['id']))
    this.dataservice.getMyGroups()
      .subscribe(
        results => {
          if (results !== null) {
            this.groups = results
          } else {
            alert ("no results found")
          }
        },
        error => console.log(error)
      )
    console.log(this.groups)
  }
  
  }
  
