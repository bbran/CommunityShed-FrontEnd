import { Component, OnInit } from '@angular/core';
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
  dtTrigger = new Subject();
  dtOptions: DataTables.Settings = {};

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

  copyProductDetails() {
    console.log("this works");
  }

}
