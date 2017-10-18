import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-mygroups',
  templateUrl: './mygroups.component.html',
  styleUrls: ['./mygroups.component.css']
})
export class MygroupsComponent implements OnInit {

  groups: any[];
  pendinggroups;
  groupId;
  user;
    constructor(private dataservice: DataService, private route: ActivatedRoute) { }
  
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
              console.log(this.groups)
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
        },
        error => console.log(error)
      )
   
  }

    denyInvite(){
        this.route.params
        .switchMap((params: Params) => {
          this.groupId = params['id'];
          return this.dataservice. denyUserInvite(params['id']);
          })
          .subscribe(
            results => {
              if (results !== null) {
                this.user = results
              } else {
                alert ("no results found")
              }
            },
            error => console.log(error)
          )
        console.log(this.user)
      }

    acceptInvite(){
          this.route.params
          .switchMap((params: Params) => {
            this.groupId = params['id'];
            return this.dataservice. acceptUserInvite(params['id']);
            })
            .subscribe(
              results => {
                if (results !== null) {
                  this.user = results
                } else {
                  alert ("no results found")
                }
              },
              error => console.log(error)
            )
          console.log(this.user)
        }
      
  }