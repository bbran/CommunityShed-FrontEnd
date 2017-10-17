import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-tool-form',
  templateUrl: './tool-form.component.html',
  styleUrls: ['./tool-form.component.css']
})

export class ToolFormComponent implements OnInit {

//   toolData: NgForm;
//   @ViewChild('toolForm')
//   toolID: number;
//   tool: object;

//   getToolForEdit(){
//     this.route.params //get route params
//     //take something from param, make a call to service, then subscibe to result
//       .switchMap((params: Params) => this.dataService.getToolDetails("tool", +params['id']))
//       .subscribe(tool => this.tool = tool);
//   }

//   constructor( private dataservice: DataService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
//     this.displayToolsToEdit()
  }

//   displayToolsToEdit(){

//     this.route.params
//     .switchMap((params: Params) => {
//       this.toolID = params['id'];
//       return this.dataservice.editTool(params['id']);
//       })
//       .subscribe(
//         results => {
//           if (results !== null) {
//             this.tool = results
//           } else {
//             alert ("no results found")
//           }
//         },
//         error => console.log(error)
//       )
//     console.log(this.tool)
//   }

}
