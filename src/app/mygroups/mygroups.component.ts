import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mygroups',
  templateUrl: './mygroups.component.html',
  styleUrls: ['./mygroups.component.css']
})
export class MygroupsComponent implements OnInit {

  groups: any[];
  
    constructor(private dataservice: DataService) { }
  
    ngOnInit() {
      this.displayMyGroups()
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
      console.log(this.groups)
    }
  
  }
  
