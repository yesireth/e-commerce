import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
 
  data: Array<any> = [];

  constructor(private ProductsService : ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.products().subscribe(element =>{
      this.data = element
      console.log(this.data)})
  }
}
