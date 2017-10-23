import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-community-shed',
  templateUrl: './community-shed.component.html',
  styleUrls: ['./community-shed.component.css']
})
export class CommunityShedComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  dtTrigger = new Subject();

  tools: any[];
  availableTools;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers"
    }

    this.getCommunityTools()
  }

  getCommunityTools(){
    this.dataservice.getCommunityTools()
      .subscribe(
        results => {
          if (results !== null) {
            this.tools = results
            console.log(this.tools)
            this.showAvailableTools(this.tools)
          } else {
            alert ("no results found")
          }
          this.dtTrigger.next();          
        },
        error => console.log(error)
      )
      
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
}
