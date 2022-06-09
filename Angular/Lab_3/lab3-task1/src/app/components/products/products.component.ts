import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {timestamp} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  search:string=""
  date = new Date(2022,5,20)
  Products:Product[]=[
    new Product(0,"product 1","gcs-123",this.date,5,20),
    new Product(1,"product 2","gcs-124",this.date,4,30),
    new Product(2,"product 3","gcs-125",this.date,3,40),
    new Product(3,"product 4","gcs-126",this.date,2.5,60)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
