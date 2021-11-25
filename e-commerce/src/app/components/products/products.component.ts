import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProductsService } from 'src/app/service/data-products.service';
import { Order, OrderDetail } from 'src/models/product-model';
import { ProductsService } from '../../service/products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category : string ="";
  textFilter : string ="";
  productsShow: Array<any> = [];
  products: Array<any> = [];
  show: any = true;

  objOrder = new Order
  objOrderDetail = new OrderDetail

  mostrarVentanaAgregado: boolean = false;
  
  constructor(public router: Router, 
              private ProductsService: ProductsService,
              private ComunicacionProducts : DataProductsService) { }

  ngOnInit(): void {
    this.category ="all";
    this.ProductsService.products().subscribe(element =>{
      this.products = element
      this.productsShow = element
      this.ComunicacionProducts.setArrayCategories(element)
      console.log(this.productsShow)
      
    }
    )
      this.ComunicacionProducts.categorySelectedObservable.subscribe(response => {
         this.category = response;
         this.listProductsByFilters();
     });
     this.ComunicacionProducts.textFilterObservable.subscribe(response => {
        this.textFilter=response;
        this.listProductsByFilters();
    });
  }

  listProductsByFilters(){
    if(this.textFilter.trim()==""){  //si NO HAY  texto de buskeda
      if(this.category.trim()=="all"){  //si la categoria es All (todos)
        this.productsShow = this.products;
      }
      else this.productsShow = this.products.filter((items) => items.category === this.category)
    }
    else{ //si HAY  texto de buskeda 
      if(this.category.trim()=="all"){  //si la categoria es All (todos)
         this.productsShow = this.products.filter((items) =>
          items.title.toLowerCase().includes(this.textFilter.toLowerCase().trim())  )
      }
      else{
        this.productsShow = this.products.filter((items) => items.category === this.category &&
        (items.title.toLowerCase().includes(this.textFilter.toLowerCase().trim()) ) ) 
      }
    }
  }
  buyProducts(objProduct:any){
    this.objOrderDetail = new OrderDetail
    this.objOrderDetail.id =  objProduct.id;
    this.objOrderDetail.qty =  1;
    this.objOrderDetail.price =  objProduct.price;
    this.objOrderDetail.title =  objProduct.title;
    this.objOrderDetail.image =  objProduct.image;
    this.objOrderDetail.description =  objProduct.description;

    const productsSelect = this.objOrder.products.find(element => element.id === objProduct.id);
        if (productsSelect === undefined) { //si es nuevo 
          this.objOrder.products.push(this.objOrderDetail);
        }
        else{ //en caso no sea nuevo, sumar uno a la cantidad
          this.changeAmount(this.objOrderDetail);
        }

    this.mostrarMensaje();
    localStorage.setItem("ls_objOrder",JSON.stringify(this.objOrder));
  }
  changeAmount(item: OrderDetail) {
        this.objOrder.products= this.objOrder.products.map(e =>{
          if(e.id==item.id){
            e.qty++;
          }
          return e;
        } )
   }

  async mostrarMensaje() {
    this.mostrarVentanaAgregado=true;
    const result = await this.habilitarDiv();
    this.mostrarVentanaAgregado=false;
  }
   habilitarDiv() {
    var promise = new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        resolve(false);
      },1500);
    });
    return promise;
 }
 

}
