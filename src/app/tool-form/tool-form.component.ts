import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tool-form',
  templateUrl: './tool-form.component.html',
  styleUrls: ['./tool-form.component.css']
})

export class ToolFormComponent implements OnInit {

  toolForm: NgForm;
  @ViewChild('toolForm')
  successMessage: string;
  errorMessage: string;

  tool: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.tool = { category: '' };
  }


  getToolForEdit(){
    this.route.params
      .switchMap((params: Params) => this.dataService.getToolDetails(params['id']))
      .subscribe(tool => this.tool = tool);
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        (+params['id']) ? this.getToolForEdit() : null;
      });
  }

  saveTool(tool: NgForm){
    console.log(tool.value)
    if(typeof tool.value.id === "number"){
      this.dataService.editTool(tool.value, tool.value.id)
          .subscribe(
            tool => this.successMessage = "Record updated successfully",
            error =>  this.errorMessage = <any>error);
      alert("Tool has been updated!")
      this.router.navigateByUrl('/tooldetails/' + tool.value.id);
    }else{
      this.dataService.createNewTool(tool.value)
          .subscribe(
            tool => this.successMessage = "Record added successfully",
            error =>  this.errorMessage = <any>error);
            this.tool = {};
    }
  }
}
  // toolForm: NgForm;
  // @ViewChild('toolForm')
  // toolData: object;
  // toolInfoFromGet

  // successMessage: string;
  // errorMessage: string;


  // constructor( 
  //   private dataservice: DataService, 
  //   private router: Router, 
  //   private route: ActivatedRoute 
  // ) {}

  // //checks if id exists in URL to know if its an edit or add
  // ngOnInit() {
  //   this.route.params
  //   .subscribe((params: Params) => {
  //     (+params['id']) ? this.getToolForEdit() : null;
  //   });
  // }

  // //if tool id exists, call getToolDetails to get the info about the tool
  // getToolForEdit(){
  //   this.route.params
  //     .switchMap((params: Params) => this.dataservice.getToolDetails(params['id']))
  //     .subscribe(result => this.toolInfoFromGet = result);
  // }

  // //decide if its an edit or add based on if tool id exists and make service calls appropriately
  // saveTool(toolData: NgForm){
  //   console.log(this.toolData)
  //   // if(typeof this.toolData.id === "number"){
  //   //   console.log(this.toolInfoFromGet.id)      
  //   //   this.dataservice.editTool(this.toolInfoFromGet.id)
  //   //       .subscribe(
  //   //         result => this.successMessage = "Record updated successfully",
  //   //         error =>  this.errorMessage = <any>error);
  //   // }else{
  //   //   this.dataservice.createNewTool(this.toolData)
  //   //       .subscribe(
  //   //         result => this.successMessage = "Record added successfully",
  //   //         error =>  this.errorMessage = <any>error);
  //   //         this.toolData = {};
  //   // }

  // }
  // // submitNewTool(){
  // //   console.log(this.toolData.value)
  
  // //   this.dataservice.createNewTool(this.toolData.value) 
  // //     .subscribe (
  // //       result => {
  // //         if (result !== null) {
  // //           alert("tool created successfully.")
  // //           this.router.navigateByUrl('/myshed');
  // //         } else {
  // //           alert ("Tool create broken. Fix!")
  // //         }
  // //       },
  // //       error => console.log(error)
  // //     )
  
  // // }
