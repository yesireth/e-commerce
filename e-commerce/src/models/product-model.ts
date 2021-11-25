
export class Order{
    _id    : string = "" ;
    client : string= ""; //userName del input
    products :  OrderDetail[] = [];
}

export class OrderDetail {
   qty: number = 0;
   category  : string = ""; 
   description  : string = ""; 
   image  : string = ""; 
   id: string = ""; //id 
   price :number = 0;
   title = "";  // title
}


// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// title