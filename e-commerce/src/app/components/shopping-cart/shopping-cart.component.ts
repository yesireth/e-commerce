import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { DataProductsService } from 'src/app/service/data-products.service';
import { Order, OrderDetail } from 'src/models/product-model';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
 
  base: number = 1;
  total: number = 0;

  objOrder = new Order
  objOrderDetail = new OrderDetail
  saveLocalStorage: any= localStorage.getItem('ls_objOrder');
  
  constructor(private ProductsService : ProductsService, private ComunicacionProducts : DataProductsService) { }
  ngOnInit(): void {
    this.objOrder=  this.saveLocalStorage ==null ? new Order :  JSON.parse(this.saveLocalStorage);
    console.log(this.objOrder)
    this.getTotal();
  }
  changeAmount(base:number, item: OrderDetail) {
    this.objOrder.products= this.objOrder.products.map(e =>{
      if(e.id==item.id){
        e.qty = e.qty + base;
      }
      return e;
    }).filter(f => f.qty !=0);
    this.getTotal();
    localStorage.setItem("ls_objOrder",JSON.stringify(this.objOrder));
  }
  getTotal() {
    this.total = this.objOrder.products
      .map((item) => item.qty * item.price)
      .reduce((acc, item) => (acc += item), 0);
  }

}


