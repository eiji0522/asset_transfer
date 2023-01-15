import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-debt-data',
  templateUrl: './debt-data.component.html',
  styleUrls: ['./debt-data.component.css']
})
export class DebtDataComponent implements OnInit {
  debts: any

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {

      const debtObservable = this.productService.getDebts()
      debtObservable.subscribe(
        (data) => {
          this.debts = data
        },
        (err) => {
        }
      )
      })
  }

}
