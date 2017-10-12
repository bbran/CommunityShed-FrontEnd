import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-community-shed',
  templateUrl: './community-shed.component.html',
  styleUrls: ['./community-shed.component.css']
})
export class CommunityShedComponent implements OnInit {

  tools: any[];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
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
        },
        error => console.log(error)
      )
    console.log(this.tools)
  }

}
