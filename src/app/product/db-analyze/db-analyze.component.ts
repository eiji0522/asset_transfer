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
  titles: any

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.titles = titles
  }
}
