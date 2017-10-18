import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';

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

  fileChange(event) {
  //   let fileList: FileList = event.target.files;
  //   if(fileList.length > 0) {
  //       let file: File = fileList[0];
  //       let formData:FormData = new FormData();
  //       formData.append('uploadFile', file, file.name);
  //       let headers = new Headers();
  //       headers.append('Content-Type', 'multipart/form-data');
  //       headers.append('Accept', 'application/json');
  //       let options = new RequestOptions({ headers: headers });
  //       this.http.post(`${this.apiEndPoint}`, formData, options)
  //           .map(res => res.json())
  //           .catch(error => Observable.throw(error))
  //           .subscribe(
  //               data => console.log('success'),
  //               error => console.log(error)
  //           )
  //   }
  }

  //apiEndPoint = POST "/api/tools/{toolId}/s3/upload"
  
}
