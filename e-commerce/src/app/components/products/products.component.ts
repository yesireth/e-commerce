import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from '../../service/products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  data: Array<any> = [];
  products: Array<any> = [];
  mensClothing: Array<any> = [];
  womensClothing: Array<any> = [];
  productsJewelery: Array<any> = [];
  productselectronics: Array<any> = [];

  constructor(public router: Router, private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.products().subscribe(element =>{
      this.data = element
      console.log(this.data)})
  }

  menClothing(){
    this.mensClothing = this.data.filter((items) => items.category === 'men\'s clothing')
    console.log( this.mensClothing);
  }
  womenClothing(){
    this.womensClothing = this.data.filter((items) => items.category === 'women\'s clothing')
    console.log( this.womensClothing);
  }
  productJewelery(){
    this.productsJewelery = this.data.filter((items) => items.category === 'jewelery')
    console.log( this.productsJewelery);
  }
  productelectronics(){

    this.productselectronics = this.data.filter((items) => items.category === 'electronics')
    console.log( this.productselectronics);
  }

}
