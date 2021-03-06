import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-mygroups',
  templateUrl: './mygroups.component.html',
  styleUrls: ['./mygroups.component.css']
})
export class MygroupsComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};
  
  dtTrigger = new Subject();

  groups: any[];
  pendinggroups;
  user;


    constructor(private router: Router, private dataservice: DataService, private route: ActivatedRoute) { }
  
    ngOnInit() {

      this.displayMyGroups()
      this.displayPendingRequest()
    }
  
    displayMyGroups(){
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

    }

    displayPendingRequest(){
      this.dataservice.getUserInvites()
      .subscribe(
        results => {
          if (results !== null) {

            this.pendinggroups = results
            console.log(this.pendinggroups)
          } else {
            alert ("no results found")
          }
          this.dtTrigger.next()
          // this.drawTable();
        },
        error => console.log(error)
      )
   
  }

    denyInvite(id){
        this.dataservice.denyUserInvite(id)
          .subscribe(
            results => {
              if (results !== null) {
                this.user = results
                this.displayMyGroups()
                this.displayPendingRequest()
              } else {
                alert ("no results found")
              }
            },
            error => console.log(error)
          )
        console.log(this.user)
      }

    acceptInvite(id){
        this.dataservice.acceptUserInvite(id)
            .subscribe(
              results => {
                if (results !== null) {
                  this.user = results
                  this.displayMyGroups()
                  this.displayPendingRequest()
                } else {
                  alert ("no results found")
                }
              },
              error => console.log(error)
            )
          console.log(this.user)
        }
  }