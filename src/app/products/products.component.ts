import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private searchString: string;
  private products;
  private toolDetail: string;
  dtTrigger = new Subject();
  dtOptions: DataTables.Settings = {};
  @Output() onSelectProduct = new EventEmitter<object>();

  constructor(
    private dataservice: DataService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
          this.dtOptions = {
            pagingType: "full_numbers",
            searching: false
          }
        }
  
  getProducts() {
    this.dataservice.getProducts(this.searchString)
      .subscribe(
          results => {
            this.products = results;
            setTimeout(() => {
              this.dtTrigger.next();
            }, 100);
          },
          error => console.log(error)
      );
  }

  copyProductDetails(toolName: string, manufacturer: string, details: string, model: string, mpn: string, imageUrl: string) {
    toolName = toolName !== null ? JSON.stringify(toolName.substring(0, 30)) : "";
    manufacturer = manufacturer !== null ? JSON.stringify(manufacturer.substring(0, 30)) : "";
    model = model !== null ? model : "";
    mpn = mpn !== null ? mpn : "";
    details = details !== null ? details : "";
    let toolDescription = `Model: ${model}; MPN: ${mpn}; Details: ${details}`
    toolDescription = JSON.stringify(toolDescription.substring(0, 80));
    this.toolDetail = `{"toolName": ${toolName}, "manufacturer": ${manufacturer}, "toolDescription": ${toolDescription}, "image": "${imageUrl}"}`
    this.onSelectProduct.emit(JSON.parse(this.toolDetail));
    window.scrollTo(0,0);
  }

}
