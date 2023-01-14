import { Component, OnInit } from '@angular/core';
import { titles} from '../../titles';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-initial-screen',
  templateUrl: './initial-screen.component.html',
  styleUrls: ['./initial-screen.component.css']
})

export class InitialScreenComponent implements OnInit {
  titles: any
  products: any

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {

    this.titles = titles

    }
}
