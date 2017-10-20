import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-groupdetails',
  templateUrl: './groupdetails.component.html',
  styleUrls: ['./groupdetails.component.css']
})
export class GroupdetailsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  dtTrigger = new Subject();

  group: object;
  availableTools;
  groupdetails;
  
    @Input() groupID;
  
    constructor(private dataservice: DataService, private location: Location, private route: ActivatedRoute) { }
  
    ngOnInit() {

      this.dtOptions = {
        pagingType: "full_numbers"
      }
      this.getNameForDisplay()
      this.showGroupTools()
    }
  
    showGroupTools(){
      this.route.params
      .switchMap((params: Params) => this.dataservice.getGroupTools(params['id']))
        .subscribe(
          results => {
            if (results !== null) {
              this.group = results
              console.log(this.group)
              this.showAvailableTools(this.group)
            } else {
              alert ("no results found")
            }
            this.dtTrigger.next();
          },
          error => console.log(error)
        )
      console.log(this.group)
    }
  
    showAvailableTools(tools){
      this.availableTools = []
        for(const tool of tools) {
          switch(tool.status) {
            case 'Available':
              this.availableTools.push(tool)
              break;
          }
        }
      
    }

    getNameForDisplay(){
      this.route.params
      .switchMap((params: Params) => this.dataservice.getGroupDetails(params['id']))
      .subscribe(
        results => {
          if (results !== null) {
            this.groupdetails = results
            console.log(this.groupdetails)
          } else {
            alert ("no results found")
          }
        },
        error => console.log(error)
      )

    }

  }