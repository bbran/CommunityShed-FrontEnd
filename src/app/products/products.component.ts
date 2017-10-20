import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private searchString: string;
  private products = [];

  constructor(
    private dataservice: DataService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  getProducts() {
    this.dataservice.getProducts(this.searchString)
      .subscribe(
          results => {
            this.products = results;
            console.log(this.products);
          },
          error => console.log(error)
      );
  }

}
