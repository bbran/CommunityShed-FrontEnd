import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {

  tool;

  constructor(
    private dataservice: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getToolInfo()
  }

  getToolInfo(){
    this.route.params
      .switchMap((params: Params) => this.dataservice.getToolDetails(params['id']))
      .subscribe(tool => this.tool = tool);
  }
}
