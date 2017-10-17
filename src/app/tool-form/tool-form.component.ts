import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tool-form',
  templateUrl: './tool-form.component.html',
  styleUrls: ['./tool-form.component.css']
})

export class ToolFormComponent implements OnInit {

  @ViewChild('toolForm')
  toolData: NgForm;

  constructor( private dataservice: DataService, private router: Router ) { }

  ngOnInit() {
  }

  submitNewTool(){
    console.log(this.toolData.value)
  
    this.dataservice.createNewTool(this.toolData.value) 
      .subscribe (
        result => {
          if (result !== null) {
            alert("tool created successfully.")
            this.router.navigateByUrl('/myshed');
          } else {
            alert ("Tool create broken. Fix!")
          }
        },
        error => console.log(error)
      )
  
  }


}
