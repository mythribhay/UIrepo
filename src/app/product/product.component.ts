import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ICategory } from '../models/category';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  categories: ICategory[];

  productList: IProduct[];

  ngOnInit() {
    this.initGetCategory();

    this.productService.allProductGlobal.subscribe(data => {
      this.productList = data;
    })
  }

  initGetCategory() {
    this.productService.getAllCategory();
    this.productService.allCategoryGlobal.subscribe(data => {
      this.categories = data;
    });
  }

  loadProcucts(cate_id) {
    this.productList = [];

    this.productService.getAllProduct(cate_id);

  }

}
