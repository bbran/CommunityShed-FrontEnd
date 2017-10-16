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
          } else {
            alert ("no results found")
          }
          this.dtTrigger.next();          
        },
        error => console.log(error)
      )
    console.log(this.tools)
  }

}
