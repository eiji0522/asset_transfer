import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-billing-data',
  templateUrl: './billing-data.component.html',
  styleUrls: ['./billing-data.component.css']
})
export class BillingDataComponent implements OnInit {
  billings: any

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const billingObservable = this.productService.getBillings()
      billingObservable.subscribe(
        (data) => {
          this.billings = data
        },
        (err) => {

        }
      )
      })
  }

}
