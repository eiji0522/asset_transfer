import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<any> {
        return this.http.get('/api/v1/products/db-analyze/product-data')
    }

    getBillings(): Observable<any> {
        return this.http.get('/api/v1/products/db-analyze/billing-data')        
    }

    getDebts(): Observable<any> {
        return this.http.get('/api/v1/products/db-analyze/debt-data')        
    }
    
    getLatestProducts(): Observable<any> {
        return this.http.get('/api/v1/products/data-update/product-data')
    }
}