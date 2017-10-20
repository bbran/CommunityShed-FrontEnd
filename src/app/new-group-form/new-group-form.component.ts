import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-group-form',
  templateUrl: './new-group-form.component.html',
  styleUrls: ['./new-group-form.component.css']
})

  export class NewGroupFormComponent implements OnInit {
    
      @ViewChild('newGroupForm') userData: NgForm;
    
      constructor(private dataservice: DataService, private router: Router) { }
    
      ngOnInit() {
      }
    
    submitNewGroup(){
      console.log(this.userData.value)
    
      this.dataservice.createNewGroup(this.userData.value) 
        .subscribe (
          result => {
            if (result !== null) {
              alert("Group created successfully.")
              this.router.navigateByUrl('/mygroups');
            } else {
              alert ("Group not made.")
            }
          },
          error => console.log(error)
        )
    
    }
    
    
    }
    