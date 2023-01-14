import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../shared/product.service';
import { titles} from '../../titles';

@Component({
  selector: 'app-db-analyze',
  templateUrl: './db-analyze.component.html',
  styleUrls: ['./db-analyze.component.css']
})

export class DbAnalyzeComponent implements OnInit {
  products: any
  billings: any
  debts: any
  titles: any

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

      const billingObservable = this.productService.getBillings()
      billingObservable.subscribe(
        (data) => {
        this.billings = data
        },
        (err) => {
        }
      )

      const debtObservable = this.productService.getDebts()
      debtObservable.subscribe(
        (data) => {
          this.debts = data
        },
        (err) => {
        }
      )

    })
    this.titles = titles
  }
}
