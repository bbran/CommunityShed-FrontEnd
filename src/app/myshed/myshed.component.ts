import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs/Rx';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-myshed',
  templateUrl: './myshed.component.html',
  styleUrls: ['./myshed.component.css']
})
export class MyshedComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  dtTrigger = new Subject();

  tools: object;
  requestedTools = [];
  loanedTools = [];
  availableTools = [];
  approvalStatus;


  constructor(private dataservice: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers"
    }

    this.getMyTools()
  }

  getMyTools(){
    this.dataservice.getMyTools()
    .subscribe(
      results => {
        if (results !== null) {
          this.tools = results
          console.log(this.tools)
          this.filterTools(this.tools)
        } else {
          alert ("no results found")
        }
        this.dtTrigger.next();                  
      },
      error => console.log(error)
    )
  }

  filterTools(tools) {
    for(const tool of tools) {
      switch(tool.status) {
        case 'Requested':
          for (const { status } of tool.requests) {
            status === 'Pending' && this.requestedTools.push(tool)
          }
        case 'On Loan':
          this.loanedTools.push(tool)         
        case 'Available' || 'Disabled':
          this.availableTools.push(tool)
      }
    }
  }

  approveRequest(id){
    this.dataservice.approveRequest(id)
    .subscribe(
      results => {
        if (results !== null) {
          this.approvalStatus = results
          console.log(this.approvalStatus)
          this.getMyTools()          
        } else {
          alert ("no results found")
        }
        this.dtTrigger.next();          
      },
      error => console.log(error)
    )
  }

  denyRequest(id){
    this.dataservice.denyRequest(id)
    .subscribe(
      results => {
        if (results !== null) {
          this.approvalStatus = results
          console.log(this.approvalStatus)
          this.getMyTools()          
        } else {
          alert ("no results found")
        }
        this.dtTrigger.next();          
      },
      error => console.log(error)
    )
  }

}
