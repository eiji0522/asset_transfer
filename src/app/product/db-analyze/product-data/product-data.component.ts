import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {
  products: any

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {

      const productObservable = this.productService.getProducts()
      productObservable.subscribe(
        (data) => {
          this.products = data
        },
        (err) => {

        }
      )
      })
  }

}
