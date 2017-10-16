import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-myshed',
  templateUrl: './myshed.component.html',
  styleUrls: ['./myshed.component.css']
})
export class MyshedComponent implements OnInit {

  tools: object;
  requestedTools = [];
  loanedTools = [];
  availableTools = [];


  constructor(private dataservice: DataService) { }

  ngOnInit() {
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
        case 'Available':
          this.availableTools.push(tool)
        case 'Loaned':
          this.loanedTools.push(tool)
      }
    }
  }

}
