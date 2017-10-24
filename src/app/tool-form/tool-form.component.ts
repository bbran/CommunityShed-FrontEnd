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
  addedTool;
  toolCategories: any[];

  private messageToShow: string;

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
    this.dataService
      .getToolCategories()
      .subscribe(categories => this.toolCategories = categories);
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
            tool => {
              if (tool !== null) {
              this.addedTool = tool
              console.log(this.addedTool)
              this.router.navigateByUrl('/tooldetails/' + this.addedTool.id);
            } else {
              alert ("no results found")
            }
          },
          error => {
            console.log(error)
            this.messageToShow = "Email not recognized for that invitation key. Please use the email you were invited with."
            }
        )
    }
  }

  onSelectProduct(tool) {
    this.tool = tool;
  }
}


