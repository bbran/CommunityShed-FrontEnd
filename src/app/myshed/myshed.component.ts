import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs/Rx';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-myshed',
  templateUrl: './myshed.component.html',
  styleUrls: ['./myshed.component.css']
})
export class MyshedComponent implements OnInit {
  @ViewChildren(DataTableDirective)
  awesomeTables: QueryList<DataTableDirective>;

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
        this.redrawTables();
      },
      error => console.log(error)
    )
  }

  filterTools(tools) {
    this.requestedTools = [];
    this.loanedTools = [];
    this.availableTools = [];
    for(const tool of tools) {
      switch(tool.status) {
        case 'Requested':
          for (const { status } of tool.requests) {
            if(status === 'Pending'){
              this.requestedTools.push(tool)
            }
          }
          break;
        case 'On Loan':
          this.loanedTools.push(tool)
          console.log(this.loanedTools);
          break;
        case 'Available' || 'Disabled':
          this.availableTools.push(tool)
          break;
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
      },
      error => console.log(error)
    )
  }

  changeToolStatus(status, id){
    if(status === 'Available'){
      this.dataservice.disableTool(id)
    }
    if(status === 'Disabled'){
      this.dataservice.enableTool(id)
    }
    this.getMyTools()
  }

  private redrawTables() {
    const arrayOfPromises = [];
    for (const table of this.awesomeTables.toArray()) {
      arrayOfPromises.push(table.dtInstance);
    }
    Promise.all(arrayOfPromises)
      .then((arrayOfInstancePromises: DataTables.Api[]) => {
        return arrayOfInstancePromises.map(dataTable => dataTable && dataTable.destroy());
      })
      .then(() => this.dtTrigger.next())
      .catch(error => console.error(error));
}

}
