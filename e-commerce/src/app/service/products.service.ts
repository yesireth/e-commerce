import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private Url = "https://fakestoreapi.com/products"
  constructor(private http: HttpClient) { }
   products():Observable<any> {
   console.log(this.http.get(this.Url)); 
  return this.http.get(this.Url)
 }




}
