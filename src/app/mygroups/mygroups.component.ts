import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-mygroups',
  templateUrl: './mygroups.component.html',
  styleUrls: ['./mygroups.component.css']
})
export class MygroupsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  dtTrigger = new Subject();

  groups: any[];
  pendinggroups;
  user;

  @ViewChild(DataTableDirective)
  table: DataTableDirective;

    constructor(private router: Router, private dataservice: DataService, private route: ActivatedRoute) { }
  
    ngOnInit() {
      // this.dtOptions = {
      //   pagingType: "full_numbers"
      // }

      this.displayMyGroups()
      this.displayPendingRequest()
    }
  
    displayMyGroups(){
      this.dataservice.getMyGroups()

        .subscribe(
          results => {
            if (results !== null) {
              results.sort((a, b) => a.groupName.charCodeAt(0) - b.groupName.charCodeAt(0));
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
            // this.pendinggroups = results
            console.log('in subscribe:', results)
          } else {
            alert ("no results found")
          }
          setTimeout(() => {
            console.log('in timeout:', results);
            const dtinst = this.table && this.table.dtInstance;
            console.log('dtinst:', dtinst);
            if (dtinst) {
              dtinst
                .then(inst => inst && inst.destroy())
                .then(() => this.pendinggroups = results)
                .then(() => this.dtTrigger.next());
            } else {
              this.pendinggroups = results;
              this.dtTrigger.next();
            }
          }, 100);
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
         // console.log(this.user)
        }
  }