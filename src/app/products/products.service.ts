import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Product } from './product';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  private productsUrl = 'http://5bbe0c9a8be32700139e3521.mockapi.io/products/';

  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(`${this.productsUrl}?sortBy=createdAt&order=asc`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError())
      );
  }

  getProduct(productId: number): Observable<Product> {

    const url = `${this.productsUrl}/${productId}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError())
      );
  }

  updateProduct(product: Product): Observable<Product> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}${product.id}`;
    return this.http.put<Product>(url, product, { headers: headers })
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError())
      );    
  }

  addProduct(product: Product): Observable<Product> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Product>(this.productsUrl, product, {headers: headers})
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError())
      );
  }

  deleteProduct(productId: number): Observable<Product> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}${productId}`;
    return this.http.delete<Product>(url, {headers: headers})
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError())
      );
  }

  private handleError() {

    return (err: any) => {
        
      let errorMessage: string;
  
      if(err.error instanceof ErrorEvent) {
  
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
  
        errorMessage = `Server retured code ${err.status}: ${err.body.error}`;
      }
  
      console.log(errorMessage);

      return Observable.throw(errorMessage);
    }
  }
}
