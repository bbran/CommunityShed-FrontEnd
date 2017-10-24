import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
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
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('file', file, file.name);
        this.dataservice.fileUpload(formData, this.tool.id)
          .subscribe(
            data => {
              if(data !== null){
                this.router.navigateByUrl('/tooldetails/' + this.tool.id)
              }else{
                alert('image was not updated')
              }              
            },
            error => console.log(error)
          )
    }
  }
}
