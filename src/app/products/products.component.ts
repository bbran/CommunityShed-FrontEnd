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
            this.dtTrigger.next();
            console.log(this.products);
          },
          error => console.log(error)
      );
  }

  copyProductDetails(toolName: string, manufacturer: string, toolDescription: string, model: string) {
    this.toolDetail = `{"toolName": "${toolName}", "manufacturer": "${manufacturer}", "toolDescription": "Model: ${model}<br>Details: ${toolDescription}"}`
    console.log(JSON.parse(this.toolDetail));
    this.onSelectProduct.emit(JSON.parse(this.toolDetail));
    window.scrollTo(0,0);
  }

}
