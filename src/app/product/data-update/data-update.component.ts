import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-data-update',
  templateUrl: './data-update.component.html',
  styleUrls: ['./data-update.component.css']
})
export class DataUpdateComponent implements OnInit {

  dummy: any

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
  }

  stock_onclick() {
    this.productService.getLatestProducts().subscribe(
      (_result) => { 
          console.log("Success!")
      },
      (err: HttpErrorResponse) => { 
          console.error(err)
      }
  )

  }

  billing_onclick() {

  }

  debt_onclick() {

  }
}
