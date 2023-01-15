import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<any> {
        //20230115 変更(Start)
        // return this.http.get('/api/v1/products/db-analyze')
        return this.http.get('/api/v1/products/db-analyze/product-data')
        //20230115 変更(End)
    }

    getBillings(): Observable<any> {
        //20230115 変更(Start)
        // return this.http.get('/api/v1/products/db-analyze2')
        return this.http.get('/api/v1/products/db-analyze/billing-data')        
        //20230115 変更(End)
    }

    getDebts(): Observable<any> {
        //20230115 変更(Start)        
        // return this.http.get('/api/v1/products/db-analyze3')
        return this.http.get('/api/v1/products/db-analyze/debt-data')        
        //20230115 変更(End)
    }
    //20230115 変更(Start)       
    // getProductById(productId: string):Observable<any> {
    //     return this.http.get('/api/v1/products/' + productId)
    //20230115 変更(End)       

    }